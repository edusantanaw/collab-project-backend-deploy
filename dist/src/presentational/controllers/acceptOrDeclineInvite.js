"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptOrDeclineInviteController = void 0;
const http_response_1 = require("../helpers/http-response");
class AcceptOrDeclineInviteController {
    acceptOrDeclineInviteUsecase;
    constructor(acceptOrDeclineInviteUsecase) {
        this.acceptOrDeclineInviteUsecase = acceptOrDeclineInviteUsecase;
    }
    async handle({ inviteId, accepted }) {
        try {
            if (!inviteId)
                return (0, http_response_1.badRequest)("O id do convite é necessario!");
            if (typeof accepted !== "boolean")
                return (0, http_response_1.badRequest)("O status é necessario!");
            await this.acceptOrDeclineInviteUsecase.update(inviteId, accepted);
            return (0, http_response_1.ok)(true);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.AcceptOrDeclineInviteController = AcceptOrDeclineInviteController;
