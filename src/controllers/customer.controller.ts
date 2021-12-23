import { Get, Post, Route, Tags } from "tsoa";
import { Service } from "typedi";
import CustomerService from "../services/customer.service";
import { Request, Response } from "express";
import CustomerDto from "../models/customer.dto";
import LoginDto from "../models/loginDto";


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

    @Post("/")
    async postCustomer(_req: Request, res: Response) {
        const customer: CustomerDto = _req.body;
        const customer_id = await this.customerService.createCustomer(customer);
        return res.json({customer_id: customer_id, message: "Customer Created"});
    }

    @Post("/login")
    async login(_req: Request, res: Response) {
        const loginDto: LoginDto = _req.body;
        await this.customerService.login(loginDto).then((response) => {
            return res.json(response);
        }).catch((error) => {
            return res.json(error);
        });
    }

}

export default CustomerController;