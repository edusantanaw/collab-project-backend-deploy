"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateController = void 0;
const http_response_1 = require("../helpers/http-response");
class UpdateController {
    schemaValidator;
    updateUsecase;
    constructor(schemaValidator, updateUsecase) {
        this.schemaValidator = schemaValidator;
        this.updateUsecase = updateUsecase;
    }
    async handle(data) {
        try {
            console.log(data);
            const { error } = this.schemaValidator.valid(data);
            if (error)
                return (0, http_response_1.badRequest)(error.message);
            const response = await this.updateUsecase.execute(data);
            return (0, http_response_1.ok)(response);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.UpdateController = UpdateController;
