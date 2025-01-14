import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ValidatorException } from 'src/common/exceptions/validator-exception';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { EmailDuplicatedException } from 'src/common/exceptions/email-duplicated-exception';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}


    async validateUser(email: string, pass: string): Promise<any>{
        const user = await this.userService.findOne(email);
        if(!user){
            throw new ValidatorException('Usuário e/ou Senha incorreto(s)');
        }

        const isMatch = await bcrypt.compare(pass, user.password);
        if(!isMatch){
            throw new ValidatorException('Usuário e/ou Senha incorreto(s)');
        }
        
        const { password, ...result } = user;
        return result  
    }


    async signIn(user: any){
        const payload = { sub: user.id, username: user.nome, email: user.email };
        const refeshToken = await this.createRefreshToken(user);
        return {
            access_token: await this.jwtService.signAsync(payload),
            refresh_token: refeshToken,
        }
    } 


    async createRefreshToken(user: any): Promise<string> {
        const payload = { sub: user.id, username: user.nome, email: user.email };
        return this.jwtService.signAsync(payload, { expiresIn: '2m' });
    }

   
    async refreshToken(token: string) {
        const decoded = this.jwtService.verify(token);
        const payload = { sub: decoded.sub, username: decoded.nome, email: decoded.email };

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }


    async signup(authDto: AuthDto): Promise<AuthDto> {
        const email = authDto.email
        const findUser = await this.usersRepository.findOne({ where: {email} })
        
        if(findUser) {
            throw new EmailDuplicatedException();
        }

        if(authDto.password !== authDto.confirmPassword){
            throw new ValidatorException('Senhas não coincidem.');
        }

        const newUser = {
            ...authDto,
            password: await bcrypt.hash(authDto.password, 10)
        }

        const createUser = await this.usersRepository.save(
            new User( newUser.nome, newUser.email, newUser.password)
        );

        return {
            ...createUser,
            password: undefined
        };
    }

   

}
