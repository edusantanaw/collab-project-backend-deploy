"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptOrDeclineInviteUsecase = void 0;
const invite_1 = require("../../../domain/entities/invite");
class AcceptOrDeclineInviteUsecase {
    inviteRepository;
    projectRepository;
    collaboratorRepository;
    constructor(inviteRepository, projectRepository, collaboratorRepository) {
        this.inviteRepository = inviteRepository;
        this.projectRepository = projectRepository;
        this.collaboratorRepository = collaboratorRepository;
    }
    async update(inviteId, accepted) {
        const invite = await this.getInvite(inviteId);
        invite.setAccepted(accepted);
        accepted ? await this.accept(invite) : await this.persiste(invite);
    }
    async accept(invite) {
        const project = await this.projectRepository.loadById(invite.getProjectId());
        if (!project)
            throw new Error("Project not exists!");
        await this.persiste(invite);
        await this.collaboratorRepository.create(project.id, invite.getInvitedId());
    }
    async persiste(invite) {
        await this.inviteRepository.updateStatus(invite.getId(), Boolean(invite.gettAccepted()));
    }
    async getInvite(inviteId) {
        const inviteExits = await this.inviteRepository.loadById(inviteId);
        if (!inviteExits)
            throw new Error("Invite not exists!");
        const invite = new invite_1.Invite(inviteExits);
        return invite;
    }
}
exports.AcceptOrDeclineInviteUsecase = AcceptOrDeclineInviteUsecase;
