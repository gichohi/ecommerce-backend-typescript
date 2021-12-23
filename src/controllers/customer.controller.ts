import { Get, Route, Tags } from "tsoa";
import { Service } from "typedi";
import CustomerService from "../services/customer.service";
import { Request, Response } from "express";
import CustomerDto from "../models/customer.dto";


@Route("categories")
@Tags("Category")
@Service()
class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get("/:id")
    async getCustomerById(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.customerService.getCustomerById(parseInt(id));
        return  res.json(result);
    }

    async postCustomer(_req: Request, res: Response) {
        const customer: CustomerDto = _req.body;
        const customer_id = await this.customerService.createCustomer(customer);
        return res.json({customer_id: customer_id, message: "Customer Created"});
    }
}

export default CustomerController;