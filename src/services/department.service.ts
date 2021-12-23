import 'reflect-metadata';

import { Service } from "typedi";
import Department from "../models/department";
import DepartmentRepository from "../repository/department.repository";

@Service()
class DepartmentService {
    constructor(
        private readonly departmentRepository: DepartmentRepository,
    ) {}
    
    public async findAll(): Promise<Department[]> {
        return await this.departmentRepository.findAll();
    }

    public async findById(id: number): Promise<Department> {
        return await this.departmentRepository.findById(id);
    }
}

export default DepartmentService;