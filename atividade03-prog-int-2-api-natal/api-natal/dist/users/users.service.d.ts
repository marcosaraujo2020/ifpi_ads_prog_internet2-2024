import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findAllUsers(): Promise<UsersDto[]>;
    findOneUser(id: string): Promise<UsersDto | null>;
    findOne(email: string): Promise<User | undefined>;
    createUser(userDto: UsersDto): Promise<UsersDto>;
}
