interface CustomerUpdate {
    customer_id: number;
    email: string;
    name?: string;
    day_phone?: string;
    eve_phone?: string;
    mob_phone?: string;
    credit_card?: string;
    address_1?: string,
    address_2?: string,
    city?: string,
    region?: string,
    country?: string,
    postal_code?: string,
    shipping_region_id?: number

}

export default CustomerUpdate;