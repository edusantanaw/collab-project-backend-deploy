"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCollabsUsecase = void 0;
const loadCollabs_1 = require("../../../../data/usecases/project/loadCollabs");
const collaborators_1 = require("../../../../infra/repositories/collaborators");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeLoadCollabsUsecase() {
    const collaboratorRepository = new collaborators_1.CollaboratorRepository();
    const projectRepository = new projectRepository_1.ProjectRepository();
    return new loadCollabs_1.LoadCollabs(collaboratorRepository, projectRepository);
}
exports.makeLoadCollabsUsecase = makeLoadCollabsUsecase;
