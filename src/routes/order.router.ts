import express from "express";
import Container from "typedi";
import OrderController from "../controllers/order.controller";

const app = express();

const orderRouter = express.Router();

const orderController = Container.get(OrderController);

orderRouter.post('/', (req, res) =>  orderController.postOrder(req,res));
orderRouter.get('/:id', (req, res) =>  orderController.getOrderById(req,res));
orderRouter.get('/customer/:id', (req, res) =>  orderController.getOrdersByCustomerId(req,res));

export default orderRouter;