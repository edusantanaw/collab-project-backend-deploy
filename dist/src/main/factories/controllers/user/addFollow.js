"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddFollowController = void 0;
const addFollow_1 = require("../../../../presentational/controllers/addFollow");
const addFollow_2 = require("../../usecases/user/addFollow");
function makeAddFollowController() {
    return new addFollow_1.AddFollowController((0, addFollow_2.makeAddFollowUsecase)());
}
exports.makeAddFollowController = makeAddFollowController;
