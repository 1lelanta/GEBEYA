const express = require('express');

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const uploadRoutes = require('./uploadRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Express App is running');
});

router.use(userRoutes);
router.use(productRoutes);
router.use(uploadRoutes);

module.exports = router;
