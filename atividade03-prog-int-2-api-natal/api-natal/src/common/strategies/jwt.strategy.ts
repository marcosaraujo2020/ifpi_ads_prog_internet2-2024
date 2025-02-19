import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ingnoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET, // jwtConstants.secret
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.nome, email: payload.email}
    }
}