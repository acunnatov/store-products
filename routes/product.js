import express from 'express';
import { getProducts,postProduct } from '../controller/productController.js';


const { Router } = express;  

const router = Router();    

router.get('/products',getProducts);

router.post('/addProduct',postProduct);

export default router