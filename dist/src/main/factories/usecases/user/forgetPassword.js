"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeForgetPasswordUsecase = void 0;
const forgetPassword_1 = require("../../../../data/usecases/user/forgetPassword");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
const senderMail_1 = require("../../../../utils/senderMail");
function makeForgetPasswordUsecase() {
    const sendMailer = new senderMail_1.SenderMailer();
    const userRepositoy = new userRepository_1.UserRepository();
    return new forgetPassword_1.ForgetPasswordUsecase(sendMailer, userRepositoy);
}
exports.makeForgetPasswordUsecase = makeForgetPasswordUsecase;
