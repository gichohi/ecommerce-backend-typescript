import { Service } from "typedi";
import OrderDto from "../models/order.dto";
import OrderRepository from "../repository/order.repository";

@Service()
class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
  ) {}


  async createOrder(order: OrderDto): Promise<number> {
    return this.orderRepository.createOrder(order);
  }

}

export default OrderService;