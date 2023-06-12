"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeForgetPasswordController = void 0;
const forgetPassword_1 = require("../../../../presentational/controllers/forgetPassword");
const forgetPassword_2 = require("../../usecases/user/forgetPassword");
function makeForgetPasswordController() {
    return new forgetPassword_1.ForgetPasswordController((0, forgetPassword_2.makeForgetPasswordUsecase)());
}
exports.makeForgetPasswordController = makeForgetPasswordController;
