import express from "express";
import Container from "typedi";
import CustomerController from "../controllers/customer.controller";

const app = express();

const customerRouter = express.Router();

const customerController = Container.get(CustomerController);

customerRouter.get('/:id', (req, res) =>  customerController.getCustomerById(req,res));
customerRouter.post('/', (req, res) =>  customerController.postCustomer(req,res));
customerRouter.post('/login', (req, res) =>  customerController.login(req,res));

export default customerRouter;