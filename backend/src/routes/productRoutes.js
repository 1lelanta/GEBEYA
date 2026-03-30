const express = require('express');
const validate = require('../middleware/validate');

const {
  addProduct,
  removeProduct,
  getAllProducts,
  getNewCollections,
  getPopularInWomen,
} = require('../controllers/productController');
const { addProductSchema, removeProductSchema } = require('../validation/schemas');

const router = express.Router();

router.post('/addproduct', validate(addProductSchema), addProduct);
router.post('/removeproduct', validate(removeProductSchema), removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/newcollections', getNewCollections);
router.get('/popularinwomen', getPopularInWomen);

module.exports = router;
