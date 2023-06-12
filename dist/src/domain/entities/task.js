"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const crypto_1 = require("crypto");
class Task {
    id;
    title;
    description;
    done;
    assignedTo;
    projectId;
    constructor({ description, projectId, title, assignedTo, done, id }) {
        this.title = title;
        this.description = description;
        this.projectId = projectId;
        this.assignedTo = assignedTo;
        this.done = done ?? false;
        this.id = id ?? (0, crypto_1.randomUUID)();
    }
    getTask() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            done: this.done,
            assignedTo: this.assignedTo,
            projectId: this.projectId,
        };
    }
    getTitle() {
        return this.title;
    }
    getId() {
        return this.id;
    }
    getDescription() {
        return this.description;
    }
    getDone() {
        return this.done;
    }
    getProjectId() {
        return this.projectId;
    }
    getAssignedTo() {
        return this.assignedTo;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(desc) {
        this.description = desc;
    }
    setDone(done) {
        this.done = done;
    }
    setAssignedTo(userId) {
        if (this.assignedTo)
            throw new Error("task has already been assigned to another user!");
        this.assignedTo = userId;
    }
}
exports.Task = Task;
