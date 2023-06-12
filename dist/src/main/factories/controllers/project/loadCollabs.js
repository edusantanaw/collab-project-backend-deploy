"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCollabsController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadCollabs_1 = require("../../usecases/project/loadCollabs");
function makeLoadCollabsController() {
    return new loadById_1.LoadByIdController((0, loadCollabs_1.makeLoadCollabsUsecase)());
}
exports.makeLoadCollabsController = makeLoadCollabsController;
