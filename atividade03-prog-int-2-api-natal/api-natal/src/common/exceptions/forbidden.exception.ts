import { HttpStatus } from "@nestjs/common";
import { BaseException } from "./base-exception";

// Criando uma classe personalizada para uma exceção
export class ForbiddenException extends BaseException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
