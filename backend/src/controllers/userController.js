const { signAuthToken } = require('../services/tokenService');
const {
  findUserByEmail,
  createUser,
  addItemToCart,
} = require('../services/userService');

const signup = async (req, res) => {
  const check = await findUserByEmail(req.body.email);
  if (check) {
    return res.status(400).json({
      success: false,
      errors: 'existing user found with the same email address',
    });
  }

  const user = await createUser(req.body);
  const token = signAuthToken(user._id);
  res.json({ success: true, token });
};

const login = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (!user) {
    return res.json({ success: false, errors: 'wrong email id' });
  }

  if (req.body.password !== user.password) {
    return res.json({ success: false, errors: 'wrong Password' });
  }

  const token = signAuthToken(user._id);
  res.json({ success: true, token });
};

const addToCart = async (req, res) => {
  try {
    const userData = await addItemToCart(req.user.id, req.body.itemId);

    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, message: 'Item added to cart' });
  } catch {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  signup,
  login,
  addToCart,
};
