"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadAll = void 0;
const http_response_1 = require("../helpers/http-response");
class LoadAll {
    loadAllUsecase;
    constructor(loadAllUsecase) {
        this.loadAllUsecase = loadAllUsecase;
    }
    async handle({ id }) {
        try {
            if (!id)
                return (0, http_response_1.badRequest)("id é necessario!");
            const invites = await this.loadAllUsecase.load(id);
            if (!invites)
                return (0, http_response_1.noContent)();
            return (0, http_response_1.ok)(invites);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.LoadAll = LoadAll;
