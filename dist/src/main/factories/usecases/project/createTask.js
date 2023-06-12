"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateTaskUsecase = void 0;
const createTask_1 = require("../../../../data/usecases/project/createTask");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
const task_1 = require("../../../../infra/repositories/task");
function makeCreateTaskUsecase() {
    const taskRepository = new task_1.TaskRepository();
    const projectRepository = new projectRepository_1.ProjectRepository();
    return new createTask_1.CreateTaskUsecase(taskRepository, projectRepository);
}
exports.makeCreateTaskUsecase = makeCreateTaskUsecase;
