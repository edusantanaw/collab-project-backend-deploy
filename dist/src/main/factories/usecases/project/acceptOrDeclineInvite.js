"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAcceptOrDeclineInviteUsecase = void 0;
const acceptOrDeclineInvite_1 = require("../../../../data/usecases/project/acceptOrDeclineInvite");
const collaborators_1 = require("../../../../infra/repositories/collaborators");
const inviteRepository_1 = require("../../../../infra/repositories/inviteRepository");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeAcceptOrDeclineInviteUsecase() {
    const inviteRepository = new inviteRepository_1.InviteRepository();
    const projectRepository = new projectRepository_1.ProjectRepository();
    const collaboratorRepository = new collaborators_1.CollaboratorRepository();
    return new acceptOrDeclineInvite_1.AcceptOrDeclineInviteUsecase(inviteRepository, projectRepository, collaboratorRepository);
}
exports.makeAcceptOrDeclineInviteUsecase = makeAcceptOrDeclineInviteUsecase;
