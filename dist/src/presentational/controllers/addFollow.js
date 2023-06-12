"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFollowController = void 0;
const http_response_1 = require("../helpers/http-response");
class AddFollowController {
    addFollowUsecase;
    constructor(addFollowUsecase) {
        this.addFollowUsecase = addFollowUsecase;
    }
    async handle(data) {
        try {
            const { followingId, userId } = data;
            if (!userId)
                return (0, http_response_1.badRequest)("O id do usuario é necessario!");
            if (!followingId)
                return (0, http_response_1.badRequest)("O id de quem está seguindo é necessario!");
            await this.addFollowUsecase.add(data.userId, data.followingId);
            return (0, http_response_1.ok)(true);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.AddFollowController = AddFollowController;
