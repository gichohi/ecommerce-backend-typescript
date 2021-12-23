import { Service } from "typedi";
import db from "../config/db";
import Department from "../models/department";


@Service()
class DepartmentRepository {
    
    async findAll(): Promise<Department[]> {
        return await db.any('select * from departments'); 
    }

    async findById(id: number): Promise<Department> {
        return await db.one(`select * from departments where department_id =${id}`);
    }
    
}

export default DepartmentRepository;