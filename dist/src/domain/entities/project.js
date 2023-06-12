"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const node_crypto_1 = require("node:crypto");
class Project {
    name;
    description;
    ownerId;
    collaborators;
    id;
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.ownerId = data.ownerId;
        this.collaborators = data.collaborators ?? [];
        this.id = (0, node_crypto_1.randomUUID)();
    }
    getProject() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            owner: this.ownerId,
            collaborators: this.collaborators,
        };
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getOwner() {
        return this.ownerId;
    }
    getCollaborator() {
        return this.collaborators;
    }
    setDescription(desc) {
        this.description = desc;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Project = Project;
