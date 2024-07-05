import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import productRouter from './routes/product.js';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(logger);
app.use('/api', productRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
