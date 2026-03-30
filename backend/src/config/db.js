const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://lelanta:12345lelantabro@cluster0.adbu7nd.mongodb.net/e-commerce';

const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
};

module.exports = connectDB;
