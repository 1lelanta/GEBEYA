const Product = require('../models/Product');

const addProduct = async (req, res) => {
  const products = await Product.find({});
  const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  await product.save();
  res.json({ success: true, name: req.body.name });
};

const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, id: req.body.id });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

const getNewCollections = async (req, res) => {
  const newcollection = await Product.find().sort({ date: -1 }).limit(8);
  res.send(newcollection);
};

const getPopularInWomen = async (req, res) => {
  const products = await Product.find({ category: 'women' });
  res.send(products.slice(0, 4));
};

module.exports = {
  addProduct,
  removeProduct,
  getAllProducts,
  getNewCollections,
  getPopularInWomen,
};
