const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');

const signAuthToken = (userId) => jwt.sign({ user: { id: userId } }, jwtSecret);

const verifyAuthToken = (token) => jwt.verify(token, jwtSecret);

module.exports = {
  signAuthToken,
  verifyAuthToken,
};
