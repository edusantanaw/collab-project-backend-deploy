"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const http_response_1 = require("../helpers/http-response");
class CreateController {
    createUsecase;
    validSchema;
    constructor(createUsecase, validSchema) {
        this.createUsecase = createUsecase;
        this.validSchema = validSchema;
    }
    async handle(schema) {
        try {
            const { error } = this.validSchema.valid(schema);
            if (error)
                return (0, http_response_1.badRequest)(error.message);
            const data = await this.createUsecase.execute(schema);
            return (0, http_response_1.created)(data);
        }
        catch (err) {
            console.log(err);
            return (0, http_response_1.error)(err);
        }
    }
}
exports.CreateController = CreateController;
