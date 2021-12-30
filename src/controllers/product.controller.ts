import { Get, Route, Tags } from "tsoa";
import { Service } from "typedi";
import ProductService from "../services/product.service";
import { Request, Response } from "express";


@Route("products")
@Tags("Product")
@Service()
class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get("/:id")
    async getProductById(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.productService.getProductById(parseInt(id));
        return  res.json(result);
    }

    @Get("/department/:id")
    async getProductByDepartment(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.productService.getProductById(parseInt(id));
        return  res.json(result);
    }

    @Get("/")
    async getProducts(_req: Request, res: Response) {
        const result = await this.productService.getProducts(20);
        return  res.json(result);
    }

    @Get("/search/:word")
    async searchProducts(_req: Request, res: Response) {
        const queryText = _req.params['word'];
        const result = await this.productService.searchProducts(queryText);
        return  res.json(result);
    }
    
}

export default ProductController;