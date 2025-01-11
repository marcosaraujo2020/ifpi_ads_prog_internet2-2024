import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ){ }

    async findAllUsers(): Promise<UsersDto[]> {
        const users = await this.usersRepository.find();
        return users.map(({ id, nome, email }) => ({ id, nome, email }));
    }

    async findOneUser(id: string): Promise<UsersDto | null>{
        const user = await this.usersRepository.findOne({ where: {id} })

        if(!user) return null;

        const { id:UserId, nome, email } = user;
        return { id:UserId, nome, email };
    }

    
    async findOne(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: {email} }); 
    }


    async createUser(userDto: UsersDto): Promise<UsersDto> {    
        const newUser = {
            ...userDto,
            password: await bcrypt.hash(userDto.password, 10)
        }   
        const createUser = await this.usersRepository.save(newUser);
        return {
            ...createUser,
            password: undefined
        };
    }

}
