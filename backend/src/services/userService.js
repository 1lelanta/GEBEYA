const User = require('../models/User');

const createDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < 300; i += 1) {
    cart[i] = 0;
  }
  return cart;
};

const findUserByEmail = async (email) => User.findOne({ email });

const createUser = async ({ userName, email, password }) => {
  const user = new User({
    name: userName,
    email,
    password,
    cartData: createDefaultCart(),
  });

  await user.save();
  return user;
};

const findUserById = async (id) => User.findById(id);

const addItemToCart = async (userId, itemId) => {
  const user = await findUserById(userId);

  if (!user) {
    return null;
  }

  if (user.cartData[itemId] !== undefined) {
    user.cartData[itemId] += 1;
  } else {
    user.cartData[itemId] = 1;
  }

  await user.save();
  return user;
};

module.exports = {
  findUserByEmail,
  createUser,
  addItemToCart,
};
