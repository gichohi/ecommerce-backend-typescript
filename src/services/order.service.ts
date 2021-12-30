import { Service } from "typedi";
import OrderDto from "../models/order.dto";
import OrderRepository from "../repository/order.repository";

@Service()
class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(order: OrderDto): Promise<number> {
    return this.orderRepository.createOrder(order);
  }

  async getOrderById(orderId: number): Promise<Order> {
    return this.orderRepository.getOrderById(orderId);
  }

  async getOrdersByCustomerId(customerId: number): Promise<Order[]> {
    return this.getOrdersByCustomerId(customerId);
  }
}

export default OrderService;
