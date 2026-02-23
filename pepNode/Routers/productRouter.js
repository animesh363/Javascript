import express from 'express';
import productController from '../controllers/productsControllers.js';

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.createProduct);

export default productRouter;