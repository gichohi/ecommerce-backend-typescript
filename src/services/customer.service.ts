import { Service } from "typedi";
import Customer from "../models/customer";
import CustomerDto from "../models/customer.dto";
import CustomerRepository from "../repository/customer.repository";
import LoginDto from "../models/loginDto";
import CustomerResponse from "../models/customer.response";
import LoginResponse from "../models/login.response";
import AuthService from "./auth.service";
import bcrypt from "bcryptjs";
import LoginFailure from "../models/login.failure";

@Service()
class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly authService: AuthService
  ) {}

  async getCustomerById(customerId: number): Promise<Customer> {
    return this.customerRepository.getCustomerById(customerId);
  }

  async createCustomer(customer: CustomerDto): Promise<number> {
    const password: string = customer.password;
    const passwordHash = bcrypt.hashSync(password, 12);
    customer.password = passwordHash;
    return this.customerRepository.createCustomer(customer);
  }

  async login(login: LoginDto): Promise<LoginResponse | LoginFailure> {
    let isVerified: boolean = false;
    const email = login.email;
    const password = login.password;
    let customer: Customer;

    try {
      customer = await this.customerRepository.getCustomerByEmail(email);
      isVerified = bcrypt.compareSync(password, customer.password);
      if (isVerified) {
        const customerResponse: CustomerResponse = {
          name: customer.name,
          email: customer.email,
          credit_card: customer.credit_card,
          address_1: customer.address_1,
          address_2: customer.address_2,
          city: customer.city,
          region: customer.region,
          postal_code: customer.postal_code,
          country: customer.country,
          shipping_region_id: customer.shipping_region_id,
          day_phone: customer.day_phone,
          eve_phone: customer.eve_phone,
          mob_phone: customer.mob_phone,
        };

        const token = this.authService.createToken(customer.email);
        const loginResponse: LoginResponse = {
          customer: customerResponse,
          accessToken: token,
          expiresIn: 3600,
        };

        return new Promise<LoginResponse>((resolve, reject) => {
          resolve(loginResponse);
        });
      } else {
        const loginFailure: LoginFailure = {
          message: "Login Failure. Wrong email or password!",
        };
        return new Promise<LoginFailure>((resolve, reject) => {
          resolve(loginFailure);
        });
      }
    } catch (e) {
      const loginFailure: LoginFailure = {
        message: "Login Failure. Wrong email or password!",
      };
      return new Promise<LoginFailure>((resolve, reject) => {
        resolve(loginFailure);
      });
    }
  }
}

export default CustomerService;
