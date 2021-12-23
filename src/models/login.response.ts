import CustomerResponse from "./customer.response";

interface LoginResponse {
    customer: CustomerResponse;
    accessToken: string;
    expiresIn: number;
}

export default LoginResponse;