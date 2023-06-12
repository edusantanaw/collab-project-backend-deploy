"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFollow = void 0;
class AddFollow {
    userRepository;
    followRepository;
    constructor(userRepository, followRepository) {
        this.userRepository = userRepository;
        this.followRepository = followRepository;
    }
    async add(userId, followingId) {
        const userExists = !!(await this.userRepository.loadById(followingId));
        if (!userExists)
            throw "User not exists!";
        await this.followRepository.create({ userId, followingId });
    }
}
exports.AddFollow = AddFollow;
