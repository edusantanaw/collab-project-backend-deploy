"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddFollowUsecase = void 0;
const addFollow_1 = require("../../../../data/usecases/user/addFollow");
const follow_1 = require("../../../../infra/repositories/follow");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
function makeAddFollowUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    const followRepository = new follow_1.FollowRepository();
    return new addFollow_1.AddFollow(userRepository, followRepository);
}
exports.makeAddFollowUsecase = makeAddFollowUsecase;
