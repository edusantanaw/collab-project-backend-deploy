"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthUsecase = void 0;
const auth_1 = require("../../../../data/usecases/user/auth");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
const encrypter_1 = require("../../../../utils/encrypter");
const generateToken_1 = require("../../../../utils/generateToken");
function makeAuthUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    const encrypter = new encrypter_1.Encrypter();
    const generateToken = new generateToken_1.JwtToken();
    return new auth_1.AuthUsecase(userRepository, encrypter, generateToken);
}
exports.makeAuthUsecase = makeAuthUsecase;
