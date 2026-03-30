const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  new_price_etb: { type: Number },
  old_price_etb: { type: Number },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('product', productSchema);
