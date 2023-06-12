"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFinishTaskController = void 0;
const finishTask_1 = require("../../../../presentational/controllers/finishTask");
const finishTask_2 = require("../../usecases/project/finishTask");
function makeFinishTaskController() {
    return new finishTask_1.FinishTaskController((0, finishTask_2.makeFinishTaskUsecase)());
}
exports.makeFinishTaskController = makeFinishTaskController;
