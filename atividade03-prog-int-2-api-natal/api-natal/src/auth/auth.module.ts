import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { RefreshTokenStrategy } from 'src/common/strategies/refresh-token.strategy';
import { User } from 'src/users/user.entity';
import { UserModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        UserModule,
        ConfigModule.forRoot(),
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET, //jwtConstants.secret
            signOptions: { expiresIn: '60s'},
        })
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        RefreshTokenStrategy,
        {
            provide: APP_GUARD,
            useClass: AuthGuard
        }
    ],
    exports: [AuthService]
})
export class AuthModule {}
