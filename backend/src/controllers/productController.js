const {
  createProduct,
  deleteProductById,
  listAllProducts,
  listNewCollections,
  listPopularInWomen,
} = require('../services/productService');

const addProduct = async (req, res) => {
  const payload = req.validatedBody || req.body;
  await createProduct(payload);
  res.json({ success: true, name: payload.name });
};

const removeProduct = async (req, res) => {
  const payload = req.validatedBody || req.body;
  await deleteProductById(payload.id);
  res.json({ success: true, id: payload.id });
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
