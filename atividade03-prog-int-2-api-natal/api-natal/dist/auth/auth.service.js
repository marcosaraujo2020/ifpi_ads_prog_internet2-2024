"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const validator_exception_1 = require("../common/exceptions/validator-exception");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const email_duplicated_exception_1 = require("../common/exceptions/email-duplicated-exception");
let AuthService = class AuthService {
    constructor(userService, jwtService, usersRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
    }
    async validateUser(email, pass) {
        const user = await this.userService.findOne(email);
        if (!user) {
            throw new validator_exception_1.ValidatorException('Usuário e/ou Senha incorreto(s)');
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            throw new validator_exception_1.ValidatorException('Usuário e/ou Senha incorreto(s)');
        }
        const { password, ...result } = user;
        return result;
    }
    async signIn(user) {
        const payload = { sub: user.id, username: user.nome, email: user.email };
        const refeshToken = await this.createRefreshToken(user);
        return {
            access_token: await this.jwtService.signAsync(payload),
            refresh_token: refeshToken,
        };
    }
    async createRefreshToken(user) {
        const payload = { sub: user.id, username: user.nome, email: user.email };
        return this.jwtService.signAsync(payload, { expiresIn: '2m' });
    }
    async refreshToken(token) {
        const decoded = this.jwtService.verify(token);
        const payload = { sub: decoded.sub, username: decoded.nome, email: decoded.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async signup(authDto) {
        const email = authDto.email;
        const findUser = await this.usersRepository.findOne({ where: { email } });
        if (findUser) {
            throw new email_duplicated_exception_1.EmailDuplicatedException();
        }
        if (authDto.password !== authDto.confirmPassword) {
            throw new validator_exception_1.ValidatorException('Senhas não coincidem.');
        }
        const newUser = {
            ...authDto,
            password: await bcrypt.hash(authDto.password, 10)
        };
        const createUser = await this.usersRepository.save(new user_entity_1.User(newUser.nome, newUser.email, newUser.password));
        return {
            ...createUser,
            password: undefined
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map