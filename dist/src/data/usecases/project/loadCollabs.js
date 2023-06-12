"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCollabs = void 0;
class LoadCollabs {
    collabsRepository;
    projectRepository;
    constructor(collabsRepository, projectRepository) {
        this.collabsRepository = collabsRepository;
        this.projectRepository = projectRepository;
    }
    async load(projectId) {
        const projectExists = !!(await this.projectRepository.loadById(projectId));
        if (!projectExists)
            throw new Error("Project not exists!");
        const collabs = await this.collabsRepository.loadAll(projectId);
        return collabs;
    }
}
exports.LoadCollabs = LoadCollabs;
