"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCommentUsecase = void 0;
const createComment_1 = require("../../../../data/usecases/post/createComment");
const commentRepository_1 = require("../../../../infra/repositories/commentRepository");
const post_1 = require("../../../../infra/repositories/post");
function makeCreateCommentUsecase() {
    const postRepository = new post_1.PostRepository();
    const commentRepository = new commentRepository_1.CommentRepository();
    return new createComment_1.CreateCommentUsecase(postRepository, commentRepository);
}
exports.makeCreateCommentUsecase = makeCreateCommentUsecase;
