const bcrypt = require('bcrypt');
const User = require('../models/User');
const { bcryptSaltRounds } = require('../config/env');

const createDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < 300; i += 1) {
    cart[i] = 0;
  }
  return cart;
};

const findUserByEmail = async (email) => User.findOne({ email });

const createUser = async ({ userName, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, bcryptSaltRounds);

  const user = new User({
    name: userName,
    email,
    password: hashedPassword,
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

const verifyPassword = async (plainPassword, hashedPassword) =>
  bcrypt.compare(plainPassword, hashedPassword);

module.exports = {
  findUserByEmail,
  createUser,
  addItemToCart,
  verifyPassword,
};
