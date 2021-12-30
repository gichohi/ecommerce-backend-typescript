import { Service } from "typedi";
import { Shipping, ShippingRegion } from "../models/shipping";
import ShippingRepository from "../repository/shipping.repository";

@Service()
class ShippingService {
  constructor(private readonly shippingRepository: ShippingRepository) {}

  async getShippingRegions(): Promise<ShippingRegion[]> {
    return await this.shippingRepository.getShippingRegions();
  }

  async getShippingByRegions(id: number): Promise<Shipping[]> {
    return await this.shippingRepository.getShippingByRegions(id);
  }
}

export default ShippingService;