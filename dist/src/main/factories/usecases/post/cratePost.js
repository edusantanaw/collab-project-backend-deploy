"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreatePostUsecase = void 0;
const createPost_1 = require("../../../../data/usecases/post/createPost");
const post_1 = require("../../../../infra/repositories/post");
const userRepository_1 = require("../../../../infra/repositories/userRepository");
function makeCreatePostUsecase() {
    const userRepository = new userRepository_1.UserRepository();
    const postRepository = new post_1.PostRepository();
    return new createPost_1.CreatePostUsecase(userRepository, postRepository);
}
exports.makeCreatePostUsecase = makeCreatePostUsecase;
