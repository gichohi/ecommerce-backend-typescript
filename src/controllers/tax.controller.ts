import { Get, Route, Tags } from "tsoa";
import { Service } from "typedi";
import TaxService from "../services/tax.service";
import { Request, Response } from "express";


@Route("taxes")
@Tags("Tax")
@Service()
class TaxController {
    constructor(private readonly taxService: TaxService) { }

    @Get("/")
    async getTaxList(_req: Request, res: Response) {
        const result = await this.taxService.getTaxList();
        return  res.json(result);
    }

    @Get("/:id")
    async getTaxById(_req: Request, res: Response) {
        const id = _req.params['id'];
        const result = await this.taxService.getTaxById(parseInt(id));
        return  res.json(result);
    }
}

export default TaxController;