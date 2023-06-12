"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const prisma_1 = require("../prisma");
class TaskRepository {
    async create(data) {
        const newTask = await prisma_1.task.create({
            data: {
                id: data.id,
                title: data.title,
                description: data.description,
                projectId: data.projectId,
                assignedTo: data.assignedTo,
            },
        });
        return newTask;
    }
    async load(data) {
        console.log(data);
        const tasks = await prisma_1.task.findMany({
            where: {
                AND: [
                    { projectId: data.projectId },
                    { done: data.done },
                    { assignedTo: data.assignedTo },
                    {
                        createdAt: {
                            gt: data.afterDate,
                        },
                    },
                    { createdAt: { lt: data.beforeDate } },
                ],
            },
        });
        return tasks;
    }
    async loadById(id) {
        const maybeTask = await prisma_1.task.findFirst({ where: { id: id } });
        return maybeTask;
    }
    async acceptTask(itask) {
        await prisma_1.task.update({
            where: {
                id: itask.getId(),
            },
            data: {
                assignedTo: itask.getAssignedTo(),
            },
        });
    }
    async finish(dtask) {
        const updatedTask = await prisma_1.task.update({
            where: {
                id: dtask.id,
            },
            data: dtask,
        });
        return updatedTask;
    }
}
exports.TaskRepository = TaskRepository;
