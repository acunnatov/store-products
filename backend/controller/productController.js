import productService from '../services/productService.js';
import { InternalServerError } from '../utils/error.js';

const getProducts = async (_, res, next) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json({
      status: 200,
      message: 'Get all products',
      data: products
    });
  } catch (error) {
    next(new InternalServerError(error.message));
  }
};

const postProduct = async (req, res, next) => {
  try {
    const { name,brand, price, available } = req.body;
    const newProduct = await productService.createProduct({ name,brand, price, available });
    res.status(201).json({
      status: 201,
      message: 'New product added successfully!',
      data: newProduct
    });
  } catch (error) {
    next(new InternalServerError(error.message));
  }
};

export { getProducts, postProduct };
