import { Service } from "typedi";
import Tax from "../models/tax";
import TaxRepository from "../repository/tax.repository";

@Service()
class TaxService {
  constructor(private readonly taxRepository: TaxRepository) {}

  async getTaxList(): Promise<Tax[]> {
    return this.taxRepository.getTaxList();
  }

  async getTaxById(taxId: number): Promise<Tax[]> {
    return this.getTaxById(taxId);
  }
}

export default TaxService;