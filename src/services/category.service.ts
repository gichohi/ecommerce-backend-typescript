import { Service } from "typedi";
import Category from "../models/category";
import ProductCategory from "../models/product.category";
import CategoryRepository from "../repository/category.repository";

@Service()
class CategoryService {
    constructor(
        private readonly categoryRepository: CategoryRepository,
    ) {}

    async getCategories(): Promise<Category[]> {
        return this.categoryRepository.getCategories();
    }

    async getCategoryById(id: number): Promise<Category> {
       return await this.categoryRepository.getCategoryById(id);
    }

    async getProductCategory(productId: number): Promise<Category> {
        return await this.categoryRepository.getProductCategory(productId);
    }

    async getCategoriesByDepartment(departmentId: number): Promise<Category[]> {
        return await this.categoryRepository.getCategoriesByDepartment(departmentId);
    }
}

export default CategoryService;