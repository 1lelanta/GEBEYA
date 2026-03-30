const express = require('express');

const fetchUser = require('../middleware/auth');
const { signup, login, addToCart } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/addtocart', fetchUser, addToCart);

module.exports = router;
