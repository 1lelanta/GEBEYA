const { z } = require('zod');

const signupSchema = z.object({
  userName: z.string().trim().min(2).max(60),
  email: z.string().trim().email(),
  password: z.string().min(6).max(128),
});

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(128),
});

const addToCartSchema = z.object({
  itemId: z.coerce.number().int().positive(),
});

const addProductSchema = z.object({
  name: z.string().trim().min(1).max(200),
  image: z.string().trim().min(1).max(1000),
  category: z.string().trim().min(1).max(100),
  new_price: z.coerce.number().nonnegative(),
  old_price: z.coerce.number().nonnegative(),
  new_price_etb: z.coerce.number().nonnegative().optional(),
  old_price_etb: z.coerce.number().nonnegative().optional(),
});

const removeProductSchema = z.object({
  id: z.coerce.number().int().positive(),
});

module.exports = {
  signupSchema,
  loginSchema,
  addToCartSchema,
  addProductSchema,
  removeProductSchema,
};
