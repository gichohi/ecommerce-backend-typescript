import express from "express";
import Container from "typedi";
import TaxController from "../controllers/tax.controller";

const app = express();

const taxRouter = express.Router();

const taxController = Container.get(TaxController);

taxRouter.get('/', (req, res) =>  taxController.getTaxList(req,res));
taxRouter.get('/:id', (req, res) =>  taxController.getTaxById(req,res));

export default taxRouter;