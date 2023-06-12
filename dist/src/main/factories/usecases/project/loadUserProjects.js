"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserProjectsUsecase = void 0;
const loadUserProjects_1 = require("../../../../data/usecases/project/loadUserProjects");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeLoadUserProjectsUsecase() {
    const projectRepository = new projectRepository_1.ProjectRepository();
    return new loadUserProjects_1.LoadUserProjectsUsecase(projectRepository);
}
exports.makeLoadUserProjectsUsecase = makeLoadUserProjectsUsecase;
