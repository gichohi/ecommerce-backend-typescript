interface Order {
    order_id: number;
    customer_id: number;
    total: number;
    status: number;
    comments: string;
    auth_code: string;
    reference: string;
    shipping_id: number;
    shipping_date: Date;
    tax_id: number;
    items: OrderItem[];
}