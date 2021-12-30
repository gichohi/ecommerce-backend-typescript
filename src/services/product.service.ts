import { Service } from "typedi";
import Product from "../models/product";
import ProductRepository from "../repository/product.repository";

@Service()
class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProducts(limit: number): Promise<Product[]> {
    return this.productRepository.getProducts(limit);
  }

  async searchProducts(query_string: string): Promise<Product[]> {
    return this.productRepository.searchProducts(query_string);
  }

  async getProductById(productId: number): Promise<Product> {
    return this.productRepository.getProductById(productId);
  }

  async getProductsByCategory(
    categoryId: number,
    limit: number
  ): Promise<Product[]> {
    return this.productRepository.getProductsByCategory(categoryId, limit);
  }

  async getProductsByDepartment(
    departmentId: number,
    limit: number
  ): Promise<Product[]> {
    return this.productRepository.getProductsByDepartment(departmentId, limit);
  }
}

export default ProductService;
