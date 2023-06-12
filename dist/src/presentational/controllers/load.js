"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadController = void 0;
const http_response_1 = require("../helpers/http-response");
class LoadController {
    loadUsecase;
    constructor(loadUsecase) {
        this.loadUsecase = loadUsecase;
    }
    async handle(params) {
        try {
            const data = await this.loadUsecase.load(params);
            if (!data)
                return (0, http_response_1.noContent)();
            return (0, http_response_1.ok)(data);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.LoadController = LoadController;
