"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthController = void 0;
const auth_1 = require("../../../../presentational/controllers/auth");
const authSchema_1 = require("../../../../validation/schema/authSchema");
const validSchema_1 = require("../../../../validation/validSchema");
const auth_2 = require("../../usecases/user/auth");
function makeAuthController() {
    const authUsecase = (0, auth_2.makeAuthUsecase)();
    const validSchema = new validSchema_1.ValidSchema(authSchema_1.authSchema);
    return new auth_1.AuthController(validSchema, authUsecase);
}
exports.makeAuthController = makeAuthController;
