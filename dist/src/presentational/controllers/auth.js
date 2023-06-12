"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_response_1 = require("../helpers/http-response");
class AuthController {
    validSchema;
    authUsecase;
    constructor(validSchema, authUsecase) {
        this.validSchema = validSchema;
        this.authUsecase = authUsecase;
    }
    async handle(data) {
        try {
            const { error } = this.validSchema.valid(data);
            if (error)
                return (0, http_response_1.badRequest)(error.message);
            const auth = await this.authUsecase.auth(data.email, data.password);
            return (0, http_response_1.ok)(auth);
        }
        catch (e) {
            return (0, http_response_1.error)(e);
        }
    }
}
exports.AuthController = AuthController;
