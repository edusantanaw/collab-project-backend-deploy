"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInviteCollaboratorUsecase = void 0;
const inviteCollaborator_1 = require("../../../../data/usecases/project/inviteCollaborator");
const inviteRepository_1 = require("../../../../infra/repositories/inviteRepository");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeInviteCollaboratorUsecase() {
    const projectRepository = new projectRepository_1.ProjectRepository();
    const inviteRepository = new inviteRepository_1.InviteRepository();
    return new inviteCollaborator_1.InviteCollaboratorUsecase(projectRepository, inviteRepository);
}
exports.makeInviteCollaboratorUsecase = makeInviteCollaboratorUsecase;
