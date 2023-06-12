"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveryPasswordController = void 0;
const http_response_1 = require("../helpers/http-response");
class RecoveryPasswordController {
    recoveryPasswordUsecase;
    validSchema;
    constructor(recoveryPasswordUsecase, validSchema) {
        this.recoveryPasswordUsecase = recoveryPasswordUsecase;
        this.validSchema = validSchema;
    }
    async handle(data) {
        try {
            const { error } = this.validSchema.valid(data);
            if (error)
                return (0, http_response_1.badRequest)(error.message);
            if (data.password !== data.confirmPassword)
                return (0, http_response_1.badRequest)("As senha deve ser iguais!");
            const token = await this.recoveryPasswordUsecase.execute(data);
            return (0, http_response_1.ok)(token);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.RecoveryPasswordController = RecoveryPasswordController;
