"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProjectByIdUsecase = void 0;
const loadById_1 = require("../../../../data/usecases/generics/loadById");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
function makeLoadProjectByIdUsecase() {
    return new loadById_1.LoadById(new projectRepository_1.ProjectRepository());
}
exports.makeLoadProjectByIdUsecase = makeLoadProjectByIdUsecase;
