import { Service } from "typedi";
import Cart from "../models/cart";
import CartProduct from "../models/cart.product";
import ShoppingCartRepository from "../repository/shopping.cart.repository";

@Service()
class CartService {
  constructor(private readonly cartRepository: ShoppingCartRepository) {}

  async addProductToCart(c: Cart): Promise<number> {
    return this.cartRepository.addProductToCart(c);
  }

  async getCartProductsById(cartId: string): Promise<CartProduct[]> {
    return this.cartRepository.getCartProductsById(cartId);
  }

  async updateCartProductQuantity(cartProduct: CartProduct): Promise<number> {
    return this.cartRepository.updateCartProductQuantity(cartProduct);
  }

  async emptyCart(cartId: string): Promise<null> {
    return this.emptyCart(cartId);
  }

  async removeProductFromCart(
    cartProduct: CartProduct
  ): Promise<CartProduct[]> {
    return this.removeProductFromCart(cartProduct);
  }
}

export default CartService;