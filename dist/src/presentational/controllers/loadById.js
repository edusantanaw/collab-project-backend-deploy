"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadByIdController = void 0;
const http_response_1 = require("../helpers/http-response");
class LoadByIdController {
    usecase;
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle({ id }) {
        try {
            if (!id)
                return (0, http_response_1.badRequest)("O id é necessario!");
            const data = await this.usecase.load(id);
            if (!data)
                return (0, http_response_1.noContent)();
            return (0, http_response_1.ok)(data);
        }
        catch (err) {
            return (0, http_response_1.error)(err);
        }
    }
}
exports.LoadByIdController = LoadByIdController;
