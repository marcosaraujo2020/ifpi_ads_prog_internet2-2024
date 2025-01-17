import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';



@Controller()
export class AuthController {
    constructor(private authService:AuthService){}

    @Public()
    @Post('signin')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() body: Record<string, any>) {
        const user = await this.authService.validateUser(body.email, body.password)
        return this.authService.signIn(user);
    }


    @Post('refresh')
    async refresh(@Request() req) {
        const token = req.headers.authorization.split(' ')[1];
        return this.authService.refreshToken(token);
        //console.log(token)
    }

   
    @Get('profile')
    getProfile(@Request() req) {
        return req.user 
    }

    @Public()
    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    async signup(@Res() response: Response, @Body() body: AuthDto) {
        const userCreated = await this.authService.signup(body);
        return response.status(201).json(userCreated);   
    }
}
