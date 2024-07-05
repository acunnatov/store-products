import Product from '../models/Product.js';

const getProducts = async () => {
  return await Product.find();
};

const createProduct = async (productData) => {
  return await Product.create(productData);
};

export default {
  getProducts,
  createProduct,
};
