import express from "express";
import Container from "typedi";
import ProductController from "../controllers/product.controller";

const app = express();

const productRouter = express.Router();

const productController = Container.get(ProductController);

productRouter.get('/:id', (req, res) =>  productController.getProductById(req,res));
productRouter.get('/department/:id', (req, res) =>  productController.getProductByDepartment(req,res));
productRouter.get('/', (req, res) =>  productController.getProducts(req,res));
productRouter.get('/search/:queryText', (req, res) =>  productController.searchProducts(req,res));

export default productRouter;