import { Logger } from "@mikro-orm/core";
import { Service } from "typedi";
import db from "../config/db";
import Customer from "../models/customer";
import CustomerDto from "../models/customer.dto";
import CustomerResponse from "../models/customer.response";

@Service()
class CustomerRepository {
    async getCustomerById(customerId: number): Promise<Customer> {
        return db.one(`select * from customer where customer_id = ${customerId}`);
    }

    async createCustomer(c: CustomerDto): Promise<number> {
        await db.none(`
        insert into customer(name, email, password,credit_card,address_1,address_2,city,region,postal_code,
            country,shipping_region_id,day_phone,eve_phone,mob_phone)
            values('${c.name}','${c.email}','${c.password}','${c.credit_card}','${c.address_1}','${c.address_2}',
                '${c.city}','${c.region}','${c.postal_code}','${c.country}',
                '${c.shipping_region_id}','${c.day_phone}','${c.eve_phone}','${c.mob_phone}')
        `);

        return (await this.getCustomerByEmail(c.email)).customer_id
     
    }

    async getCustomerByEmail(email: string): Promise<Customer> {
        return db.one(`select * from customer where email = $1`,email)
    }

}

export default CustomerRepository;