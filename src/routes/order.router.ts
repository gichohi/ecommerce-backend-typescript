import express from "express";
import Container from "typedi";
import OrderController from "../controllers/order.controller";

const app = express();

const orderRouter = express.Router();

const orderController = Container.get(OrderController);

orderRouter.post('/', (req, res) =>  orderController.postOrder(req,res));

export default orderRouter;