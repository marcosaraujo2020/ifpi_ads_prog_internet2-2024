"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedErrorException = void 0;
const common_1 = require("@nestjs/common");
const base_exception_1 = require("./base-exception");
class UnauthorizedErrorException extends base_exception_1.BaseException {
    constructor(message) {
        super(message, common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.UnauthorizedErrorException = UnauthorizedErrorException;
//# sourceMappingURL=unauthorized-exception.js.map