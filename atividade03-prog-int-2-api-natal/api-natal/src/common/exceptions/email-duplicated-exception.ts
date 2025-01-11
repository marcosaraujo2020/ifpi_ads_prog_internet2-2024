import { BaseException } from "./base-exception";
import { HttpStatus } from "@nestjs/common";

export class EmailDuplicatedException extends BaseException {
    constructor(){
        super('Email já cadastrado', HttpStatus.BAD_REQUEST);
    }
}