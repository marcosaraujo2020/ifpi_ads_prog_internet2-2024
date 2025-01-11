import { Response } from 'express';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(body: Record<string, any>): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    signup(response: Response, body: AuthDto): Promise<Response<any, Record<string, any>>>;
}
