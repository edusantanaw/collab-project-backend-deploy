"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadTaskControlle = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const loadTask_1 = require("../../usecases/project/loadTask");
function makeLoadTaskControlle() {
    return new load_1.LoadController((0, loadTask_1.makeLoadTaskUsecase)());
}
exports.makeLoadTaskControlle = makeLoadTaskControlle;
