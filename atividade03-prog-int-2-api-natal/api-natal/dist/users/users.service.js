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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const email_duplicated_exception_1 = require("../common/exceptions/email-duplicated-exception");
const validator_exception_1 = require("../common/exceptions/validator-exception");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findAllUsers() {
        const users = await this.usersRepository.find();
        return users.map(({ id, nome, email }) => ({ id, nome, email }));
    }
    async findOneUser(id) {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user)
            return null;
        const { id: UserId, nome, email } = user;
        return { id: UserId, nome, email };
    }
    async findOne(email) {
        return this.usersRepository.findOne({ where: { email } });
    }
    async createUser(userDto) {
        const email = userDto.email;
        const findUser = await this.usersRepository.findOne({ where: { email } });
        if (findUser) {
            throw new email_duplicated_exception_1.EmailDuplicatedException();
        }
        if (userDto.password !== userDto.confirmPassword) {
            throw new validator_exception_1.ValidatorException('Senhas não coincidem.');
        }
        const newUser = {
            ...userDto,
            password: await bcrypt.hash(userDto.password, 10)
        };
        const createUser = await this.usersRepository.save(new user_entity_1.User(newUser.nome, newUser.email, newUser.password));
        return {
            ...createUser,
            password: undefined
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map