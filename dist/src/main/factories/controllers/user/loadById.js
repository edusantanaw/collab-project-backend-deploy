"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByIdController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadById_2 = require("../../usecases/user/loadById");
function makeLoadUserByIdController() {
    return new loadById_1.LoadByIdController((0, loadById_2.makeLoadUserByIdUsecase)());
}
exports.makeLoadUserByIdController = makeLoadUserByIdController;
