"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailDuplicatedException = void 0;
const base_exception_1 = require("./base-exception");
const common_1 = require("@nestjs/common");
class EmailDuplicatedException extends base_exception_1.BaseException {
    constructor() {
        super('Email já cadastrado', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.EmailDuplicatedException = EmailDuplicatedException;
//# sourceMappingURL=email-duplicated-exception.js.map