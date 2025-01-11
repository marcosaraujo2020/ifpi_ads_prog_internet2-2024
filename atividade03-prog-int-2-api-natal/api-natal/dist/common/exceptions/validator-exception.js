"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorException = void 0;
const common_1 = require("@nestjs/common");
const base_exception_1 = require("./base-exception");
class ValidatorException extends base_exception_1.BaseException {
    constructor(message) {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.ValidatorException = ValidatorException;
//# sourceMappingURL=validator-exception.js.map