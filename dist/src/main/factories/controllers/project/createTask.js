"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateTaskController = void 0;
const create_1 = require("../../../../presentational/controllers/create");
const taskSchema_1 = require("../../../../validation/schema/taskSchema");
const validSchema_1 = require("../../../../validation/validSchema");
const createTask_1 = require("../../usecases/project/createTask");
function makeCreateTaskController() {
    const createTaskUsecase = (0, createTask_1.makeCreateTaskUsecase)();
    const validSchema = new validSchema_1.ValidSchema(taskSchema_1.taskSchema);
    return new create_1.CreateController(createTaskUsecase, validSchema);
}
exports.makeCreateTaskController = makeCreateTaskController;
