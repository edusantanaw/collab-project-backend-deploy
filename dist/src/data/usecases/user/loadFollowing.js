"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadFollowingUsecase = void 0;
class LoadFollowingUsecase {
    followRepository;
    userRepository;
    constructor(followRepository, userRepository) {
        this.followRepository = followRepository;
        this.userRepository = userRepository;
    }
    async load(id) {
        const maybeUser = !!(await this.userRepository.loadById(id));
        if (!maybeUser)
            throw new Error("User not exists!");
        const following = await this.followRepository.loadFollowing(id);
        if (following.length === 0)
            return null;
        return following;
    }
}
exports.LoadFollowingUsecase = LoadFollowingUsecase;
