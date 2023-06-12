"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByNameController = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const loadUserByname_1 = require("../../usecases/user/loadUserByname");
function makeLoadUserByNameController() {
    return new load_1.LoadController((0, loadUserByname_1.makeLoadUserByNameUsecase)());
}
exports.makeLoadUserByNameController = makeLoadUserByNameController;
