"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRecoveryPasswordController = void 0;
const recoveryPassword_1 = require("../../../../presentational/controllers/recoveryPassword");
const recoveryPassword_2 = require("../../../../validation/schema/recoveryPassword");
const validSchema_1 = require("../../../../validation/validSchema");
const recoveryPassword_3 = require("../../usecases/user/recoveryPassword");
function makeRecoveryPasswordController() {
    const recoveryPasswordUsecase = (0, recoveryPassword_3.makeRecoveryPasswordUsecase)();
    const validSchema = new validSchema_1.ValidSchema(recoveryPassword_2.recoverySchema);
    return new recoveryPassword_1.RecoveryPasswordController(recoveryPasswordUsecase, validSchema);
}
exports.makeRecoveryPasswordController = makeRecoveryPasswordController;
