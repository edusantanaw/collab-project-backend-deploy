"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadTaskUsecase = void 0;
const loadTask_1 = require("../../../../data/usecases/project/loadTask");
const projectRepository_1 = require("../../../../infra/repositories/projectRepository");
const task_1 = require("../../../../infra/repositories/task");
function makeLoadTaskUsecase() {
    const projectRepository = new projectRepository_1.ProjectRepository();
    const taskRepository = new task_1.TaskRepository();
    return new loadTask_1.LoadTaskUsecase(projectRepository, taskRepository);
}
exports.makeLoadTaskUsecase = makeLoadTaskUsecase;
