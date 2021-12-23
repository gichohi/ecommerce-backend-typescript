import { Service } from "typedi";
import Customer from "../models/customer";
import CustomerDto from "../models/customer.dto";
import CustomerRepository from "../repository/customer.repository";

@Service()
class CustomerService {
    constructor(
        private readonly customerRepository: CustomerRepository,
    ) {}

    async getCustomerById(customerId: number): Promise<Customer> {
        return this.customerRepository.getCustomerById(customerId);
    }

    async createCustomer(customer: CustomerDto): Promise<number> {
        return this.customerRepository.createCustomer(customer);
    }
}

export default CustomerService;