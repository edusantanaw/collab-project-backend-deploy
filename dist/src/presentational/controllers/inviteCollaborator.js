"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteCollaboratorController = void 0;
const http_response_1 = require("../helpers/http-response");
class InviteCollaboratorController {
    inviteCollaboratorUsecase;
    constructor(inviteCollaboratorUsecase) {
        this.inviteCollaboratorUsecase = inviteCollaboratorUsecase;
    }
    async handle(data) {
        try {
            const { invitedId, projectId } = data;
            if (!invitedId)
                return (0, http_response_1.badRequest)("O id do convite é necessario!");
            if (!projectId)
                return (0, http_response_1.badRequest)("O id do projeto é necessario!");
            await this.inviteCollaboratorUsecase.invite(data);
            return (0, http_response_1.ok)(true);
        }
        catch (e) {
            return (0, http_response_1.error)(e);
        }
    }
}
exports.InviteCollaboratorController = InviteCollaboratorController;
