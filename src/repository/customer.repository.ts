import { Logger } from "@mikro-orm/core";
import { Service } from "typedi";
import db from "../config/db";
import Customer from "../models/customer";
import CustomerDto from "../models/customer.dto";
import CustomerResponse from "../models/customer.response";
import CustomerUpdate from "../models/customer.update";

@Service()
class CustomerRepository {
    async getCustomerById(customerId: number): Promise<CustomerResponse> {
        return db.one(`select customer_id name, email,credit_card,address_1,address_2,city,region,postal_code,
        country,shipping_region_id,day_phone,eve_phone,mob_phone from customer where customer_id = ${customerId}`);
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

    async updateCustomer(c: CustomerUpdate): Promise<CustomerResponse> {
        let email;
        let name;let day_phone;let eve_phone;let mob_phone;let credit_card;
        let address_1;let address_2;let city;let country;let region;
        let postal_code;let shipping_region_id;

        email = c?.email;
        name = c?.name;
        day_phone= c?.day_phone;
        eve_phone = c?.eve_phone;
        mob_phone = c?.mob_phone;
        credit_card = c?.credit_card;
        address_1 = c?.address_1;
        address_2 = c?.address_2;
        city = c?.city;
        region = c?.region;
        country = c?.country;
        postal_code = c?.postal_code;
        shipping_region_id = c?.shipping_region_id;

        let sql = `update customer set `;

        if(email !== null) {
            sql += `, email = ${email}`;
        }

        if(name !== null) {
            sql += `, name = ${name}`;
        }

        if(day_phone !== null) {
            sql += `, day_phone = ${day_phone}`;
        }

        if(eve_phone !== null) {
            sql += `, eve_phone = ${eve_phone}`;
        }

        if(mob_phone !== null) {
            sql += `, mob_phone = ${mob_phone}`;
        }

        if(credit_card !== null) {
            sql += `, credit_card = ${credit_card}`;
        }

        if(address_1 !== null) {
            sql += `, eve_phone = ${address_1},`;
        }

        if(city !== null) {
            sql += `, city = ${city}`;
        }

        if(region !== null) {
            sql += `, region = ${region}`;
        }

        if(country !== null) {
            sql += `, region = ${country}`;
        }

        if(postal_code !== null) {
            sql += `, postal_code = ${postal_code}`;
        }

        if(shipping_region_id !== null) {
            sql += `, shipping_region_id = ${shipping_region_id}`;
        }

        sql += `, where customer_id = ${c.customer_id}`

        await db.none(sql);

        return this.getCustomerById(c.customer_id);
    }

}

export default CustomerRepository;