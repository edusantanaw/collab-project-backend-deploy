"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteCollaboratorUsecase = void 0;
const invite_1 = require("../../../domain/entities/invite");
const project_1 = require("../../../domain/entities/project");
class InviteCollaboratorUsecase {
    loadProject;
    inviteRepository;
    constructor(loadProject, inviteRepository) {
        this.loadProject = loadProject;
        this.inviteRepository = inviteRepository;
    }
    async invite(data) {
        const projectExits = await this.loadProject.loadById(data.projectId);
        if (!projectExits)
            throw new Error("Project not exists!");
        const project = new project_1.Project(projectExits);
        const collaborators = project.getCollaborator();
        if (collaborators.includes(data.invitedId))
            throw new Error("User already is a collaborator!");
        const invite = new invite_1.Invite({ ...data });
        await this.inviteRepository.invite(invite);
    }
}
exports.InviteCollaboratorUsecase = InviteCollaboratorUsecase;
