"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateUserController = void 0;
const update_1 = require("../../../../presentational/controllers/update");
const user_1 = require("../../../../validation/schema/user");
const validSchema_1 = require("../../../../validation/validSchema");
const update_2 = require("../../usecases/user/update");
function makeUpdateUserController() {
    const schemaValidator = new validSchema_1.ValidSchema(user_1.userSchema);
    return new update_1.UpdateController(schemaValidator, (0, update_2.makeUpdateUserUsecase)());
}
exports.makeUpdateUserController = makeUpdateUserController;
