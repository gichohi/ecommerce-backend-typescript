import { Service } from "typedi";
import db from "../config/db";
import Cart from "../models/cart";
import CartProduct from "../models/cart.product";

@Service()
class ShoppingCartRepository {

    async addProductToCart(c: Cart): Promise<number> {
        return await db.one(`
            insert into shopping_cart(cart_id,product_id,attributes,quantity,buy_now,added_on)
            values('${c.cart_id}','${c.product_id}','${c.attributes}','${c.quantity}','${c.buy_now}','now()')
        `);
    }

    async getCartProductsById(cartId: string): Promise<CartProduct[]> {
        const cartItems = await db.many(`select s.item_id, s.cart_id, s.product_id, 
        p.name, p.image, p.price, p.discounted_price, s.quantity, p.price - p.discounted_price as subtotal
        from shopping_cart s
        inner join product p on s.product_id = p.product_id
        where s.cart_id = ${cartId}`);

        return cartItems
    }

    async updateCartProductQuantity(c: CartProduct): Promise<number> {
        const quantity = await db.one(`
            update shopping_cart
            set quantity = ${c.quantity}
            where cart_id = ${c.cart_id}
            and product_id = ${c.product_id}
            returning quantity
        `);

        return quantity;
    }

    async emptyCart(cartId: string): Promise<null> {
       return await db.none('delete from shopping_cart where cart_id = $1',cartId);
    }

    async removeProductFromCart(c: CartProduct): Promise<CartProduct[]> {
        const res = await db.none(`
            delete from shopping_cart
            where cartId = ${c.cart_id}
            and product_id = ${c.product_id}
        `);

        return await this.getCartProductsById(c.cart_id);
    }

    
}