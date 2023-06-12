"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInviteCollaboratorController = void 0;
const inviteCollaborator_1 = require("../../../../presentational/controllers/inviteCollaborator");
const inviteCollaborator_2 = require("../../usecases/project/inviteCollaborator");
function makeInviteCollaboratorController() {
    return new inviteCollaborator_1.InviteCollaboratorController((0, inviteCollaborator_2.makeInviteCollaboratorUsecase)());
}
exports.makeInviteCollaboratorController = makeInviteCollaboratorController;
