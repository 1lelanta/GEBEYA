require('dotenv').config();

const port = Number(process.env.PORT) || 4000;

module.exports = {
  port,
  mongoUri:
    process.env.MONGO_URI ||
    'mongodb+srv://lelanta:12345lelantabro@cluster0.adbu7nd.mongodb.net/e-commerce',
  jwtSecret: process.env.JWT_SECRET || 'secret_ecom',
  baseUrl: process.env.BASE_URL || `http://localhost:${port}`,
};
