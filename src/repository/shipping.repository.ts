import { Service } from "typedi";
import db from "../config/db";
import { Shipping, ShippingRegion } from "../models/shipping";

@Service()
class ShippingRepository {
  async getShippingRegions(): Promise<ShippingRegion[]> {
    return await db.many("select * from shipping_region");
  }

  async getShippingByRegions(id: number): Promise<Shipping[]> {
    return await db.one(
      "select * from shipping where shipping_region_id = $1",
      id
    );
  }
}

export default ShippingRepository;