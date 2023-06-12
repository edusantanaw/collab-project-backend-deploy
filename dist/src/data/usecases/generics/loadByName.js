"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadByNameUsecase = void 0;
class LoadByNameUsecase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async load({ name }) {
        const data = await this.repository.loadByName(name);
        if (data.length === 0)
            return null;
        return data;
    }
}
exports.LoadByNameUsecase = LoadByNameUsecase;
