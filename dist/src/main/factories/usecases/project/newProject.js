"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNewProjectUsecase = void 0;
const newProject_1 = require("../../../../data/usecases/project/newProject");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeNewProjectUsecase() {
    const projectRepository = new projectRepository_1.ProjectRepository();
    return new newProject_1.NewProjectUsecase(projectRepository);
}
exports.makeNewProjectUsecase = makeNewProjectUsecase;
