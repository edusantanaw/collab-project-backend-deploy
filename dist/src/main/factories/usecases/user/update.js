"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateUserUsecase = void 0;
const update_1 = require("../../../../data/usecases/user/update");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
function makeUpdateUserUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    return new update_1.UpdateUserUsecase(userRepository);
}
exports.makeUpdateUserUsecase = makeUpdateUserUsecase;
