"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrRemovePostLikeController = void 0;
const http_response_1 = require("../helpers/http-response");
class AddOrRemovePostLikeController {
    addOrRemovePostLikeUsecase;
    constructor(addOrRemovePostLikeUsecase) {
        this.addOrRemovePostLikeUsecase = addOrRemovePostLikeUsecase;
    }
    async handle({ postId, userId }) {
        try {
            if (!postId)
                return (0, http_response_1.badRequest)("O id do post é necessario!");
            if (!userId)
                return (0, http_response_1.badRequest)("O id do usuario é necessario!");
            await this.addOrRemovePostLikeUsecase.execute({ postId, userId });
            return (0, http_response_1.ok)(true);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.AddOrRemovePostLikeController = AddOrRemovePostLikeController;
