const express = require('express');

const fetchUser = require('../middleware/auth');
const validate = require('../middleware/validate');
const { signup, login, addToCart } = require('../controllers/userController');
const {
	signupSchema,
	loginSchema,
	addToCartSchema,
} = require('../validation/schemas');

const router = express.Router();

router.post('/signup', validate(signupSchema), signup);
router.post('/login', validate(loginSchema), login);
router.post('/addtocart', fetchUser, validate(addToCartSchema), addToCart);

module.exports = router;
