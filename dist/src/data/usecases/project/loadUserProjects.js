"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserProjectsUsecase = void 0;
class LoadUserProjectsUsecase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async load({ id }) {
        const projects = await this.projectRepository.loadUserProjects(id);
        if (projects.length === 0)
            return null;
        return projects;
    }
}
exports.LoadUserProjectsUsecase = LoadUserProjectsUsecase;
