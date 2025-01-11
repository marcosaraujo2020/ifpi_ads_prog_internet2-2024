import { HttpStatus } from "@nestjs/common";
import { BaseException } from "./base-exception";


export class ValidatorException extends BaseException {
    constructor(message: string){
        super(message, HttpStatus.BAD_REQUEST)
    }
}