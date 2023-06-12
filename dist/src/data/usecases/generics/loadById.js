"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadById = void 0;
class LoadById {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async load(id) {
        const data = await this.repository.loadById(id);
        return data;
    }
}
exports.LoadById = LoadById;
