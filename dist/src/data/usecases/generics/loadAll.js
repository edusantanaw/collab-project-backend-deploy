"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAllUsecase = void 0;
class LoadAllUsecase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async load(id) {
        const data = await this.repository.loadAll(id);
        if (data.length === 0)
            return null;
        return data;
    }
}
exports.LoadAllUsecase = LoadAllUsecase;
