import { HttpException, HttpStatus } from "@nestjs/common";
export declare class BaseException extends HttpException {
    constructor(message: string, statuCode: HttpStatus);
}
