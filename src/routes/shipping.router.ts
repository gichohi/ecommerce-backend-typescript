import express from "express";
import Container from "typedi";
import ShippingController from "../controllers/shipping.controller";

const app = express();

const shippingRouter = express.Router();

const shippingController = Container.get(ShippingController);

shippingRouter.get('/', (req, res) =>  shippingController.getShippingRegions(req,res));
shippingRouter.get('/:id', (req, res) =>  shippingController.getShippingByRegionId(req,res));

export default shippingRouter;