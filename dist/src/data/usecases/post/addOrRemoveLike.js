"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrRemovePostLikeUsecase = void 0;
const like_1 = require("../../../domain/entities/like");
class AddOrRemovePostLikeUsecase {
    postRepository;
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async execute(data) {
        const maybeLike = await this.postRepository.loadLike(data.postId, data.userId);
        if (maybeLike) {
            await this.remove(maybeLike.id);
            return;
        }
        await this.add(data.userId, data.postId);
    }
    async remove(id) {
        this.postRepository.removeLike(id);
    }
    async add(userId, postId) {
        const newLike = new like_1.Like({ postId, userId });
        await this.postRepository.addLike(newLike.getLike());
    }
}
exports.AddOrRemovePostLikeUsecase = AddOrRemovePostLikeUsecase;
