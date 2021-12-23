import { Service } from "typedi";
import db from "../config/db";
import Category from "../models/category";

@Service()
class CategoryRepository {
    async getCategories(): Promise<Category[]> {
        return db.any('select * from categorys');
    }

    async getCategoryById(id: number): Promise<Category> {
        return db.one(`select * from categorys where category_id=${id}`);
    }

    async getProductCategory(productId: number): Promise<Category> {
        return db.one(`select * from categorys inner join product_category
         on categorys.category_id = product_category.category_id 
         and product_category.product_id =${productId}`);
    }

    async getCategoriesByDepartment(departmentId: number): Promise<Category[]> {
        return db.any(`select * from categorys where department_id = ${departmentId}`);
    }

}

export default CategoryRepository;