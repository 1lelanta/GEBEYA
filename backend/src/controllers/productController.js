const {
  createProduct,
  deleteProductById,
  listAllProducts,
  listNewCollections,
  listPopularInWomen,
} = require('../services/productService');

const addProduct = async (req, res) => {
  await createProduct(req.body);
  res.json({ success: true, name: req.body.name });
};

const removeProduct = async (req, res) => {
  await deleteProductById(req.body.id);
  res.json({ success: true, id: req.body.id });
};

const getAllProducts = async (req, res) => {
  const products = await listAllProducts();
  res.send(products);
};

const getNewCollections = async (req, res) => {
  const newcollection = await listNewCollections();
  res.send(newcollection);
};

const getPopularInWomen = async (req, res) => {
  const products = await listPopularInWomen();
  res.send(products);
};

module.exports = {
  addProduct,
  removeProduct,
  getAllProducts,
  getNewCollections,
  getPopularInWomen,
};
