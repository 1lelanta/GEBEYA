const mongoose = require('mongoose');

const connectDB = require('../src/config/db');
const Product = require('../src/models/Product');

const seedProducts = [
  {
    id: 1,
    name: 'Women Floral Summer Dress',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    category: 'women',
    new_price: 59.99,
    old_price: 89.99,
    new_price_etb: 6500,
    old_price_etb: 8900,
  },
  {
    id: 2,
    name: 'Women Casual Blazer',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    category: 'women',
    new_price: 74.0,
    old_price: 109.0,
    new_price_etb: 7800,
    old_price_etb: 10800,
  },
  {
    id: 3,
    name: 'Women Knit Sweater',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
    category: 'women',
    new_price: 48.5,
    old_price: 70.0,
    new_price_etb: 5200,
    old_price_etb: 7300,
  },
  {
    id: 4,
    name: 'Women Denim Jacket',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    category: 'women',
    new_price: 85.0,
    old_price: 120.0,
    new_price_etb: 9800,
    old_price_etb: 12900,
  },
  {
    id: 5,
    name: 'Men Slim Fit Shirt',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80',
    category: 'men',
    new_price: 52.0,
    old_price: 78.0,
    new_price_etb: 5600,
    old_price_etb: 7900,
  },
  {
    id: 6,
    name: 'Men Bomber Jacket',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    category: 'men',
    new_price: 95.0,
    old_price: 140.0,
    new_price_etb: 11500,
    old_price_etb: 14900,
  },
  {
    id: 7,
    name: 'Kids Printed Hoodie',
    image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80',
    category: 'kid',
    new_price: 38.0,
    old_price: 59.0,
    new_price_etb: 3900,
    old_price_etb: 5800,
  },
  {
    id: 8,
    name: 'Kids Sneakers',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
    category: 'kid',
    new_price: 45.0,
    old_price: 66.0,
    new_price_etb: 5100,
    old_price_etb: 6800,
  },
  {
    id: 9,
    name: 'Classic Leather Belt',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80',
    category: 'belt',
    new_price: 24.0,
    old_price: 36.0,
    new_price_etb: 2600,
    old_price_etb: 3600,
  },
  {
    id: 10,
    name: 'Minimal Wrist Watch',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    category: 'watch',
    new_price: 129.0,
    old_price: 169.0,
    new_price_etb: 14900,
    old_price_etb: 18900,
  },
  {
    id: 11,
    name: 'Running Shoes Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    category: 'shoes',
    new_price: 110.0,
    old_price: 149.0,
    new_price_etb: 13800,
    old_price_etb: 17200,
  },
  {
    id: 12,
    name: 'Cotton Sport Socks',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80',
    category: 'socks',
    new_price: 12.0,
    old_price: 18.0,
    new_price_etb: 1200,
    old_price_etb: 1800,
  },
];

const run = async () => {
  try {
    await connectDB();

    await Product.deleteMany({});
    await Product.insertMany(seedProducts);

    console.log(`Seeded ${seedProducts.length} products successfully.`);
  } catch (error) {
    console.error('Failed to seed products:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

run();
