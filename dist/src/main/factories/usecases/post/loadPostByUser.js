"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadPostByUserUsecase = void 0;
const loodPostByUser_1 = require("../../../../data/usecases/post/loodPostByUser");
const post_1 = require("../../../../infra/repositories/post");
function makeLoadPostByUserUsecase() {
    const postRepository = new post_1.PostRepository();
    return new loodPostByUser_1.LoadPostByUserUsecase(postRepository);
}
exports.makeLoadPostByUserUsecase = makeLoadPostByUserUsecase;
