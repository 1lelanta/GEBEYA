const express = require('express');

const {
  addProduct,
  removeProduct,
  getAllProducts,
  getNewCollections,
  getPopularInWomen,
} = require('../controllers/productController');

const router = express.Router();

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/newcollections', getNewCollections);
router.get('/popularinwomen', getPopularInWomen);

module.exports = router;
