"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFinishTaskUsecase = void 0;
const updatetask_1 = require("../../../../data/usecases/project/updatetask");
const task_1 = require("../../../../infra/repositories/task");
function makeFinishTaskUsecase() {
    const taskRepository = new task_1.TaskRepository();
    return new updatetask_1.FinishTaskUsecase(taskRepository);
}
exports.makeFinishTaskUsecase = makeFinishTaskUsecase;
