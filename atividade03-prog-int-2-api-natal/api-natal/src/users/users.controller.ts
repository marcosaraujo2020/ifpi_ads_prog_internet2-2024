import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { NotFoundException } from 'src/common/exceptions/notfound-exception';
import { UsersDto } from './users.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
   constructor(private readonly usersService: UsersService) {}

   @Get()
   async findAllUsers(): Promise<UsersDto[]> {
      const users = await this.usersService.findAllUsers();
      if(users.length === 0) throw new NotFoundException('Usuários não localizados');
      return users.map(({id, nome, email}) => ({id, nome, email}));
   }
  
  
   @Get(':id')
   async findOneUser(@Param('id') id: string): Promise<UsersDto> {
      const user = await this.usersService.findOneUser(id);

      if(!user){
         throw new NotFoundException('Usuario não encontrado');
      }
      return user;
   }

   @Post()
   async createUser(@Res() response: Response, @Body() userDto: UsersDto) {
      const userCreated = await this.usersService.createUser(userDto);
      return response.status(201).json(userCreated);
   }
}
