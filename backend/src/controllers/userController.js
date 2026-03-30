const { signAuthToken } = require('../services/tokenService');
const {
  findUserByEmail,
  createUser,
  addItemToCart,
  verifyPassword,
} = require('../services/userService');

const signup = async (req, res) => {
  const payload = req.validatedBody || req.body;

  const check = await findUserByEmail(payload.email);
  if (check) {
    return res.status(400).json({
      success: false,
      errors: 'existing user found with the same email address',
    });
  }

  const user = await createUser(payload);
  const token = signAuthToken(user._id);
  res.json({ success: true, token });
};

const login = async (req, res) => {
  const payload = req.validatedBody || req.body;

  const user = await findUserByEmail(payload.email);
  if (!user) {
    return res.json({ success: false, errors: 'wrong email id' });
  }

  const isPasswordValid = await verifyPassword(payload.password, user.password);
  if (!isPasswordValid) {
    return res.json({ success: false, errors: 'wrong Password' });
  }

  const token = signAuthToken(user._id);
  res.json({ success: true, token });
};

const addToCart = async (req, res) => {
  const payload = req.validatedBody || req.body;

  const userData = await addItemToCart(req.user.id, payload.itemId);

  if (!userData) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  res.json({ success: true, message: 'Item added to cart' });
};

module.exports = {
  signup,
  login,
  addToCart,
};
