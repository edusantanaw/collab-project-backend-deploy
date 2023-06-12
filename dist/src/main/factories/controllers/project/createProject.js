"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNewProjectController = void 0;
const validSchema_1 = require("../../../../validation/validSchema");
const newProjectSchema_1 = require("../../../../validation/schema/newProjectSchema");
const create_1 = require("../../../../presentational/controllers/create");
const newProject_1 = require("../../usecases/project/newProject");
function makeNewProjectController() {
    const validSchema = new validSchema_1.ValidSchema(newProjectSchema_1.projectSchema);
    const newProjectUsecase = (0, newProject_1.makeNewProjectUsecase)();
    return new create_1.CreateController(newProjectUsecase, validSchema);
}
exports.makeNewProjectController = makeNewProjectController;
