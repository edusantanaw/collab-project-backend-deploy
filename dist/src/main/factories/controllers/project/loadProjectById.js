"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProjectByIdController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadProjectById_1 = require("../../usecases/project/loadProjectById");
function makeLoadProjectByIdController() {
    return new loadById_1.LoadByIdController((0, loadProjectById_1.makeLoadProjectByIdUsecase)());
}
exports.makeLoadProjectByIdController = makeLoadProjectByIdController;
