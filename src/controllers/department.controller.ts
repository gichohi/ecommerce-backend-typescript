import { Request, Response } from "express";
import { Get, Route, Tags } from "tsoa";
import { Service } from "typedi";
import DepartmentService from "../services/department.service";

@Route("departments")
@Tags("Department")
@Service()
class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }
 
    @Get("/")
    async getAllDepartments(_req: Request, res: Response) {
        const result = await this.departmentService.findAll();
        return  res.json(result);
    }

    @Get("/:id")
    async getDepartment(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.departmentService.findById(parseInt(id));
        return  res.json(result);
    }
   
}

export default DepartmentController;