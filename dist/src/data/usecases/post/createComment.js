"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentUsecase = void 0;
const comment_1 = require("../../../domain/entities/comment");
class CreateCommentUsecase {
    postRepository;
    commentRepository;
    constructor(postRepository, commentRepository) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
    }
    async execute(data) {
        if (data.postId) {
            const maybeRepository = await this.postRepository.loadById(data.postId);
            if (!maybeRepository)
                throw new Error("Post not exists!");
        }
        const comment = new comment_1.Comment(data);
        await this.commentRepository.create(comment.getComment());
        return comment.getComment();
    }
}
exports.CreateCommentUsecase = CreateCommentUsecase;
