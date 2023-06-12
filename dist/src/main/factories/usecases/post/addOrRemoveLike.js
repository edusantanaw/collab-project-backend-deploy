"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddOrRemovePostLikeUsecase = void 0;
const addOrRemoveLike_1 = require("../../../../data/usecases/post/addOrRemoveLike");
const post_1 = require("../../../../infra/repositories/post");
function makeAddOrRemovePostLikeUsecase() {
    const postRepository = new post_1.PostRepository();
    return new addOrRemoveLike_1.AddOrRemovePostLikeUsecase(postRepository);
}
exports.makeAddOrRemovePostLikeUsecase = makeAddOrRemovePostLikeUsecase;
