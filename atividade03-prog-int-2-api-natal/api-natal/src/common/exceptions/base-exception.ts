import { HttpException, HttpStatus } from "@nestjs/common";

export class BaseException extends HttpException {
    constructor(message: string, statuCode: HttpStatus) {
        super(message, statuCode);
    }
}
