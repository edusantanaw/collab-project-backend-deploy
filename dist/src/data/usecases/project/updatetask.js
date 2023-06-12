"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishTaskUsecase = void 0;
const task_1 = require("../../../domain/entities/task");
class FinishTaskUsecase {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(id) {
        const taskExists = await this.taskRepository.loadById(id);
        if (!taskExists)
            throw new Error("Tarefa não encontrada!");
        const task = new task_1.Task(taskExists);
        task.setDone(true);
        const finishedTask = await this.taskRepository.finish(task.getTask());
        return finishedTask;
    }
}
exports.FinishTaskUsecase = FinishTaskUsecase;
