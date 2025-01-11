import { Response } from 'express';
import { UsersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAllUsers(): Promise<UsersDto[]>;
    findOneUser(id: string): Promise<UsersDto>;
    createUser(response: Response, userDto: UsersDto): Promise<Response<any, Record<string, any>>>;
}
