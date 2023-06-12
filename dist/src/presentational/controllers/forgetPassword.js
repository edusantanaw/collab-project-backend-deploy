"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordController = void 0;
const http_response_1 = require("../helpers/http-response");
class ForgetPasswordController {
    forgetPasswordUsecase;
    constructor(forgetPasswordUsecase) {
        this.forgetPasswordUsecase = forgetPasswordUsecase;
    }
    async handle({ email }) {
        try {
            if (!email)
                return (0, http_response_1.badRequest)("O email é necessario!");
            const cod = await this.forgetPasswordUsecase.execute(email);
            return (0, http_response_1.ok)(cod);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.ForgetPasswordController = ForgetPasswordController;
