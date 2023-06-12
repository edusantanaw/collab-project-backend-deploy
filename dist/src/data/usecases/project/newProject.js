"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewProjectUsecase = void 0;
const project_1 = require("../../../domain/entities/project");
class NewProjectUsecase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(data) {
        const project = new project_1.Project(data);
        const newProject = await this.projectRepository.create(project);
        return newProject;
    }
}
exports.NewProjectUsecase = NewProjectUsecase;
