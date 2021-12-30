interface Cart {
    item_id: number;
    cart_id: string;
    product_id: number;
    attributes: AttributeValue[];
    quantity: number;
    buy_now: boolean;
    added_on: Date;
}

export default Cart;