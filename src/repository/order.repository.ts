import { Service } from "typedi";
import db from "../config/db";
import OrderDto from "../models/order.dto";

@Service()
class OrderRepository {
  async createOrder(o: OrderDto): Promise<number> {
    const orderStatament = `
       insert into orders(customer_id,status,tax_id, total_amount)
       values('${o.customer_id}','${o.status}','${o.tax_id}','${o.total}')
       returning order_id
       `;
    const order_id = await db.one(orderStatament);

    o.items.forEach(async (item) => {
      const attributeObj = { attributes: item.attributes };
      const json = JSON.stringify(attributeObj);
      await db.none(`
                insert into order_detail(order_id,product_id,attributes,quantity,unit_cost)
                values('${order_id}','${item.product_id}','${json}','${item.quantity}','${item.unit_cost}')
           `);
    });

    return order_id;
  }

  async getOrderById(orderId: number): Promise<Order> {
    const order = await db.one(
      "select * from orders where order_id = $1",
      orderId
    );
    return order;
  }

  async getOrdersByCustomerId(customerId: number): Promise<Order[]> {
    const orders = await db.many(
      "select * from orders where customer_id = $1",
      customerId
    );

    return orders;
  }
}

export default OrderRepository;
