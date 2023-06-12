"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishTaskController = void 0;
const http_response_1 = require("../helpers/http-response");
class FinishTaskController {
    finishTaskUsecase;
    constructor(finishTaskUsecase) {
        this.finishTaskUsecase = finishTaskUsecase;
    }
    async handle({ id }) {
        try {
            if (!id)
                return (0, http_response_1.badRequest)("O id é necessario!");
            const data = await this.finishTaskUsecase.execute(id);
            return (0, http_response_1.ok)(data);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.FinishTaskController = FinishTaskController;
