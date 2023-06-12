"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserProjectController = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const loadUserProjects_1 = require("../../usecases/project/loadUserProjects");
function makeLoadUserProjectController() {
    return new load_1.LoadController((0, loadUserProjects_1.makeLoadUserProjectsUsecase)());
}
exports.makeLoadUserProjectController = makeLoadUserProjectController;
