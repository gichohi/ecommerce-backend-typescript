import express from "express";
import Container from "typedi";
import DepartmentController from "../controllers/department.controller";

const app = express();

const departmentRouter = express.Router();

const departmentController = Container.get(DepartmentController);

departmentRouter.get('/', (req, res) =>  departmentController.getAllDepartments(req,res));
departmentRouter.get('/:id', (req, res) =>  departmentController.getDepartment(req,res));

export default departmentRouter;