"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateUserUsecase = void 0;
const createUser_1 = require("../../../../data/usecases/user/createUser");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
const encrypter_1 = require("../../../../utils/encrypter");
const generateToken_1 = require("../../../../utils/generateToken");
function makeCreateUserUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    const encrypter = new encrypter_1.Encrypter();
    const generateToken = new generateToken_1.JwtToken();
    return new createUser_1.CreateUserUsecase(userRepository, encrypter, generateToken);
}
exports.makeCreateUserUsecase = makeCreateUserUsecase;
