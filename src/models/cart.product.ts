interface CartProduct {
   item_id?: number;
   cart_id: string;
   name?: string;
   attributes?: string;
   product_id?: number;
   image?: string;
   price?: string;
   discounted_price?: string;
   quantity?: number;
   subtotal?: string;
}

export default CartProduct;