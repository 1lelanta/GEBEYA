const { verifyAuthToken } = require('../services/tokenService');

const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: 'please authenticate using valid token' });
  }

  try {
    const data = verifyAuthToken(token);
    req.user = data.user;
    next();
  } catch {
    res.status(401).send({ errors: 'please authenticate using valid token' });
  }
};

module.exports = fetchUser;
