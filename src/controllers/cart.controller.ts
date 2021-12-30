import { Get, Post, Route, Tags } from "tsoa";
import { Service } from "typedi";
import Cart from "../models/cart";
import CartService from "../services/cart.service";
import { Request, Response } from "express";
import CartProduct from "../models/cart.product";

@Route("categories")
@Tags("Category")
@Service()
class CartController {
  constructor(private readonly cartService: CartService) {}

  async addProductToCart(_req: Request, res: Response) {
    const cart: Cart = _req.body;
    const result = this.cartService.addProductToCart(cart);
    return res.json({
      cart_id: cart.cart_id,
      message: "Product added to Cart",
    });
  }

  @Get("/:productId")
  async getCartProductsById(_req: Request, res: Response) {
    const id = _req.params["id"];
    const result = this.cartService.getCartProductsById(id);
    return res.json(result);
  }

  @Post("/update")
  async updateCartProductQuantity(_req: Request, res: Response) {
    const cartProduct: CartProduct = _req.body;
    const result = this.cartService.updateCartProductQuantity(cartProduct);
    return res.json({ message: "Product quantity updated" });
  }

  @Get("/empty/:id")
  async emptyCart(_req: Request, res: Response) {
    const id = _req.params["id"];
    const result = this.cartService.emptyCart(id);
    return res.json({ message: "Cart emptied" });
  }

  @Post("/remove")
  async removeProductFromCart(_req: Request, res: Response) {
    const cartProduct: CartProduct = _req.body;
    const result = this.cartService.removeProductFromCart(cartProduct);
    return res.json({ message: "Product removed from cart" });
  }
}

export default CartController;
