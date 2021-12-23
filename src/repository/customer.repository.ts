import { Service } from "typedi";
import db from "../config/db";

@Service()
class CustomerRepository {
    async getCustomerById(customerId: number): Promise<Customer> {
        return db.one(`select * from customer where customer_id = ${customerId}`);
    }

    async createCustomer(c: Customer): Promise<number> {
        return db.one(`insert into customer(name, email, password,credit_card,address_1,address_2,city,region,postal_code,
            country,shipping_region_id,day_phone,eve_phone,mob_phone)
            values(${c.name},${c.email},${c.password},${c.credit_card},${c.address_1},${c.address_2},
                ${c.city},${c.region},${c.postal_code},${c.country},
                ${c.shipping_region_id},${c.day_phone},${c.eve_phone},${c.mob_phone}
                returning customer_id)`);
    }
}

export default CustomerRepository;