"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadFollowingUsecase = void 0;
const loadFollowing_1 = require("../../../../data/usecases/user/loadFollowing");
const follow_1 = require("../../../../infra/repositories/follow");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
function makeLoadFollowingUsecase() {
    const followRepository = new follow_1.FollowRepository();
    const userRepository = new userRepository_1.UserRepository();
    return new loadFollowing_1.LoadFollowingUsecase(followRepository, userRepository);
}
exports.makeLoadFollowingUsecase = makeLoadFollowingUsecase;
