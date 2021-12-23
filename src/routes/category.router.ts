import express from "express";
import Container from "typedi";
import CategoryController from "../controllers/category.controller";


const app = express();

const categoryRouter = express.Router();

const categoryController = Container.get(CategoryController);

categoryRouter.get('/', (req, res) =>  categoryController.getCategories(req,res));
categoryRouter.get('/:id', (req, res) =>  categoryController.getCategoryById(req,res));

categoryRouter.get('/product/:id', (req, res) =>  categoryController.getCategoryByProductId(req,res));
categoryRouter.get('/department/:id', (req, res) =>  categoryController.getCategoriesByDepartmentId(req,res));

export default categoryRouter;