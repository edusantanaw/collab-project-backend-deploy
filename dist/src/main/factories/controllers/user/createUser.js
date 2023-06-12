"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateUserController = void 0;
const create_1 = require("../../../../presentational/controllers/create");
const createUserSchema_1 = require("../../../../validation/schema/createUserSchema");
const validSchema_1 = require("../../../../validation/validSchema");
const createUserUsecase_1 = require("../../usecases/user/createUserUsecase");
function makeCreateUserController() {
    const createUserUsecase = (0, createUserUsecase_1.makeCreateUserUsecase)();
    const validSchema = new validSchema_1.ValidSchema(createUserSchema_1.userSchema);
    return new create_1.CreateController(createUserUsecase, validSchema);
}
exports.makeCreateUserController = makeCreateUserController;
