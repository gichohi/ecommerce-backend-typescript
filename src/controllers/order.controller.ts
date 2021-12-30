import { Get, Post, Route, Tags } from "tsoa";
import { Service } from "typedi";
import OrderService from "../services/order.service";
import { Request, Response } from "express";
import OrderDto from "../models/order.dto";

@Route("orders")
@Tags("Order")
@Service()
class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post("/")
  async postOrder(_req: Request, res: Response) {
    const order: OrderDto = _req.body;
    const order_id = await this.orderService.createOrder(order);
    return res.json({ order_id: order_id, message: "Order Created" });
  }

  @Get("/:id")
  async getOrderById(_req: Request, res: Response) {
    const orderId = _req.params["id"];
    const result = await this.orderService.getOrderById(parseInt(orderId));
    return res.json(result);
  }

  @Get("/customer/:id")
  async getOrdersByCustomerId(_req: Request, res: Response) {
    const customerId = _req.params["id"];
    const result = await this.orderService.getOrderById(parseInt(customerId));
    return res.json(result);
  }
}

export default OrderController;
