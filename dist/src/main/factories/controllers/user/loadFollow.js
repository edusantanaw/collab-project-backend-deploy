"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadFollowController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadFollowingt_1 = require("../../usecases/user/loadFollowingt");
function makeLoadFollowController() {
    return new loadById_1.LoadByIdController((0, loadFollowingt_1.makeLoadFollowingUsecase)());
}
exports.makeLoadFollowController = makeLoadFollowController;
