"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecoveryPasswordUsecase = void 0;
const recoveryPassword_1 = require("../../../../data/usecases/user/recoveryPassword");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
const encrypter_1 = require("../../../../utils/encrypter");
const generateToken_1 = require("../../../../utils/generateToken");
function makeRecoveryPasswordUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    const encrypter = new encrypter_1.Encrypter();
    const generateToken = new generateToken_1.JwtToken();
    return new recoveryPassword_1.RecoveryPassword(userRepository, encrypter, generateToken);
}
exports.makeRecoveryPasswordUsecase = makeRecoveryPasswordUsecase;
