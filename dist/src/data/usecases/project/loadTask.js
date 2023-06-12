"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadTaskUsecase = void 0;
class LoadTaskUsecase {
    projectRepository;
    taskRepository;
    constructor(projectRepository, taskRepository) {
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }
    async load(data) {
        const mappedData = this.map(data);
        const projetExists = !!(await this.projectRepository.loadById(mappedData.projectId));
        if (!projetExists)
            throw new Error("Project not exists!");
        const tasks = await this.taskRepository.load(mappedData);
        if (tasks.length === 0)
            return null;
        return tasks;
    }
    map(data) {
        let { projectId, afterDate, beforeDate, done = false, skip = 0, take = 50, assignedTo, } = data;
        if (typeof done === "string") {
            done = String(done).toLocaleLowerCase() === "true";
        }
        return {
            projectId,
            afterDate,
            beforeDate,
            done,
            assignedTo,
            skip: Number(skip),
            take: Number(take),
        };
    }
}
exports.LoadTaskUsecase = LoadTaskUsecase;
