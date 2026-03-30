require('dotenv').config();

const port = Number(process.env.PORT) || 4000;

const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

module.exports = {
  port,
  mongoUri: requireEnv('MONGO_URI'),
  jwtSecret: requireEnv('JWT_SECRET'),
  baseUrl: process.env.BASE_URL || `http://localhost:${port}`,
  bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
};
