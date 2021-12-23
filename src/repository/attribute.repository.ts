import { Service } from "typedi";
import db from "../config/db";

@Service()
class AttributeRepository {
    async getAttributes(): Promise<Attribute[]> {
        return db.any('select * from attribute');
    }

    async getAttributeById(id: number): Promise<Attribute> {
        return db.one(`select * from attribute where attribute_id=${id}`);
    }

    async getAttributeValues(id: number): Promise<AttributeValue[]> {
        return db.any(`select * from attribute_value where attribute_id=${id}`);
    }

    async getAttributesByProduct(id: number): Promise<ProductAttribute[]> {
        return db.any(`select attribute.name, attribute_value.attribute_value_id,
        attribute_value from attribute inner join  attribute_value on 
        attribute.attribute_id = attribute_value.attribute_id
        inner join product_attribute.attribute_value_id = attribute_value.attribute_value_id
        and product_attribute.product_id=${id}`);
    }
}