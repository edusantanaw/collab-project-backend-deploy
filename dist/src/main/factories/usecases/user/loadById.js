"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByIdUsecase = void 0;
const loadById_1 = require("../../../../data/usecases/generics/loadById");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
function makeLoadUserByIdUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    return new loadById_1.LoadById(userRepository);
}
exports.makeLoadUserByIdUsecase = makeLoadUserByIdUsecase;
