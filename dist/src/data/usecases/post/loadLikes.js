"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadLikeUsecase = void 0;
class LoadLikeUsecase {
    postRepository;
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async load(data) {
        const post = await this.postRepository.loadById(data);
        if (!post)
            throw new Error("Post not exists!");
        const likes = await this.postRepository.loadLikes(data);
        if (likes.length === 0)
            return null;
        return likes;
    }
}
exports.LoadLikeUsecase = LoadLikeUsecase;
