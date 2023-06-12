"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUsecase = void 0;
const task_1 = require("../../../domain/entities/task");
class CreateTaskUsecase {
    repository;
    projectRepository;
    constructor(repository, projectRepository) {
        this.repository = repository;
        this.projectRepository = projectRepository;
    }
    async execute(data) {
        console.log(data);
        const projectExists = !!(await this.projectRepository.loadById(data.projectId));
        if (!projectExists)
            throw new Error("Project not exists!");
        const task = new task_1.Task(data);
        const newTask = await this.repository.create(task.getTask());
        return newTask;
    }
}
exports.CreateTaskUsecase = CreateTaskUsecase;
