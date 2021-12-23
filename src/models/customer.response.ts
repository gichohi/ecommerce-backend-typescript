interface CustomerResponse {
    name: string;
    email: string;
    credit_card: string;
    address_1: string;
    address_2: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
    shipping_region_id: number;
    day_phone: string;
    eve_phone: string;
    mob_phone: string;
}

export default CustomerResponse;