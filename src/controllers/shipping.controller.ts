import { Get, Route, Tags } from "tsoa";
import { Service } from "typedi";
import { Request, Response } from "express";
import ShippingService from "../services/shipping.service";

@Route("shipping")
@Tags("Shipping")
@Service()
class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get("/")
  async getShippingRegions(_req: Request, res: Response) {
    const result = await this.shippingService.getShippingRegions();
    return res.json(result);
  }

  @Get("/:id")
  async getShippingByRegionId(_req: Request, res: Response) {
    const id = _req.params["id"];
    const result = await this.shippingService.getShippingByRegions(
      parseInt(id)
    );
    return res.json(result);
  }
}
export default ShippingController;