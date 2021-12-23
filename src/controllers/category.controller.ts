import { Get, Route, Tags } from "tsoa";
import { Service } from "typedi";
import CategoryService from "../services/category.service";
import { Request, Response } from "express";
import ProductCategory from "../models/product.category";


@Route("categories")
@Tags("Category")
@Service()
class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get("/")
    async getCategories(_req: Request, res: Response) {
        const result = await this.categoryService.getCategories();
        return  res.json(result);
    }

    @Get("/:id")
    async getCategoryById(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.categoryService.getCategoryById(parseInt(id));
        return  res.json(result);
    }

    @Get("/product/:id")
    async getCategoryByProductId(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.categoryService.getProductCategory(parseInt(id));
        let pc: ProductCategory = {
            category_id: result.category_id,
            department_id: result.department_id,
            name: result.name
        }
        
        return  res.json(pc);
    }

    @Get("/department/:id")
    async getCategoriesByDepartmentId(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.categoryService.getCategoriesByDepartment(parseInt(id));
        return  res.json(result);
    }
}

export default CategoryController;