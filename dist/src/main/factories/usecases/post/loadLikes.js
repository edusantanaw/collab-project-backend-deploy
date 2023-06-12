"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadLikesUsecase = void 0;
const loadLikes_1 = require("../../../../data/usecases/post/loadLikes");
const post_1 = require("../../../../infra/repositories/post");
function makeLoadLikesUsecase() {
    const postRepository = new post_1.PostRepository();
    return new loadLikes_1.LoadLikeUsecase(postRepository);
}
exports.makeLoadLikesUsecase = makeLoadLikesUsecase;
