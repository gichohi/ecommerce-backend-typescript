export interface Shipping {
    shipping_id:        number;
    shipping_type:      string;
    shipping_cost:      number;
    shipping_region_id: number;
}

export interface ShippingRegion {
    shipping_region_id: number;
    shipping_region: string;
}