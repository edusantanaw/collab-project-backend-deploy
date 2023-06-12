"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadUserByNameUsecase = void 0;
const loadByName_1 = require("../../../../data/usecases/generics/loadByName");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
function makeLoadUserByNameUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    return new loadByName_1.LoadByNameUsecase(userRepository);
}
exports.makeLoadUserByNameUsecase = makeLoadUserByNameUsecase;
