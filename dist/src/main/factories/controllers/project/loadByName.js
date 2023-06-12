"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadProjectByName = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const loadProjectByName_1 = require("../../usecases/project/loadProjectByName");
function makeLoadProjectByName() {
    return new load_1.LoadController((0, loadProjectByName_1.makeLoadProjectByNameUsecase)());
}
exports.makeLoadProjectByName = makeLoadProjectByName;
