import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './auth.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    private usersRepository;
    constructor(userService: UsersService, jwtService: JwtService, usersRepository: Repository<User>);
    validateUser(email: string, pass: string): Promise<any>;
    signIn(user: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    createRefreshToken(user: any): Promise<string>;
    refreshToken(token: string): Promise<{
        access_token: string;
    }>;
    signup(authDto: AuthDto): Promise<AuthDto>;
}
