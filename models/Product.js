import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: false, required: true },  
});

const Product = mongoose.model('Product', productSchema);

export default Product;
