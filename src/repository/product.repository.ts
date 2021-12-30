import { Service } from "typedi";
import db from "../config/db";
import Product from "../models/product";

@Service()
class ProductRepository {
    async getProducts(limit: number): Promise<Product[]> {
        return db.any(`select * from product limit ${limit}`);
    }

    async searchProducts(query_string: string): Promise<Product[]> {
        return db.any(`SELECT * FROM product WHERE document_vectors @@ to_tsquery(${query_string})`);
    }

    async getProductById(productId: number): Promise<Product> {
        return db.one(`select * from product where product_id = ${productId}`);
    }

    async getProductsByCategory(categoryId: number, limit: number): Promise<Product[]> {
        return db.any(`select * from product inner join product_category
        on product_category.product_id = product.product_id 
        and product_category.category_id = ${categoryId} limit ${limit}`);
    }


    async getProductsByDepartment(departmentId: number, limit: number): Promise<Product[]> {
        return db.any(`select * from product inner join product_category
        on product.product_id = product_category.product_id
        inner join department.department_id = category.department_id
        and category.department_id = ${departmentId} limit ${limit}`);
    }

}

export default ProductRepository;