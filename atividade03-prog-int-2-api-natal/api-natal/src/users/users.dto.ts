export class UsersDto {
    readonly id?: string;
    readonly nome: string;
    readonly email: string;
    readonly password?: string;
    readonly confirmPassword?: string;
}