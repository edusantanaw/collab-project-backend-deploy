"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptTaskController = void 0;
const http_response_1 = require("../helpers/http-response");
class AcceptTaskController {
    acceptTaskUsecase;
    constructor(acceptTaskUsecase) {
        this.acceptTaskUsecase = acceptTaskUsecase;
    }
    async handle(data) {
        const { taskId, userId } = data;
        try {
            if (!taskId)
                return (0, http_response_1.badRequest)("O id da task é necessario!");
            if (!userId)
                return (0, http_response_1.badRequest)("O id do usuario é necessario!");
            await this.acceptTaskUsecase.execute(userId, taskId);
            return (0, http_response_1.ok)(true);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.AcceptTaskController = AcceptTaskController;
