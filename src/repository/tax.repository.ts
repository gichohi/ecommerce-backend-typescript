import { Service } from "typedi";
import db from "../config/db";
import Tax from "../models/tax";

@Service()
class TaxRepository {
  async getTaxList(): Promise<Tax[]> {
    return db.many("select * from tax");
  }

  async getTaxById(taxId: number): Promise<Tax[]> {
    return db.one("select * from tax where tax_id = $1", taxId);
  }
}

export default TaxRepository;
