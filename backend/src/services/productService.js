const Product = require('../models/Product');

const getNextProductId = async () => {
  const products = await Product.find({});
  return products.length > 0 ? products[products.length - 1].id + 1 : 1;
};

const createProduct = async (payload) => {
  const id = await getNextProductId();

  const product = new Product({
    id,
    name: payload.name,
    image: payload.image,
    category: payload.category,
    new_price: payload.new_price,
    old_price: payload.old_price,
    new_price_etb: payload.new_price_etb,
    old_price_etb: payload.old_price_etb,
  });

  await product.save();
  return product;
};

const deleteProductById = async (id) => Product.findOneAndDelete({ id });

const listAllProducts = async () => Product.find({});

const listNewCollections = async () => Product.find().sort({ date: -1 }).limit(8);

const listPopularInWomen = async () => {
  const products = await Product.find({ category: 'women' });
  return products.slice(0, 4);
};

module.exports = {
  createProduct,
  deleteProductById,
  listAllProducts,
  listNewCollections,
  listPopularInWomen,
};
