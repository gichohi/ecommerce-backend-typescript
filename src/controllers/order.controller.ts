import { Post, Route, Tags } from "tsoa";
import { Service } from "typedi";
import OrderService from "../services/order.service";
import { Request, Response } from "express";
import OrderDto from "../models/order.dto";


@Route("orders")
@Tags("Order")
@Service()
class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post("/")
    async postOrder(_req: Request, res: Response) {
        const order: OrderDto = _req.body;
        const order_id = await this.orderService.createOrder(order);
        return res.json({order_id: order_id, message: "Order Created"});
    }
    
}

export default OrderController;