"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProjectByNameUsecase = void 0;
const loadByName_1 = require("../../../../data/usecases/generics/loadByName");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeLoadProjectByNameUsecase() {
    const projectRepository = new projectRepository_1.ProjectRepository();
    return new loadByName_1.LoadByNameUsecase(projectRepository);
}
exports.makeLoadProjectByNameUsecase = makeLoadProjectByNameUsecase;
