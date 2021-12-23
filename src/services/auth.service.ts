import { Service } from "typedi";
import * as jwt from 'jsonwebtoken';
import Customer from "../models/customer";


@Service()
class AuthService {
    createToken(email: string): string {
        const expiresIn = 3600;
        const accessToken = jwt.sign(
            {
                sub: email
            },
            'V3ryB1gS3cr3t',
            { expiresIn },
        );
        return accessToken;
    }

}

export default AuthService;
