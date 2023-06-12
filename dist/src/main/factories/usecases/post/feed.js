"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadFeedUsecase = void 0;
const loadFeed_1 = require("../../../../data/usecases/post/loadFeed");
const post_1 = require("../../../../infra/repositories/post");
function makeLoadFeedUsecase() {
    const postRepository = new post_1.PostRepository();
    return new loadFeed_1.LoadFeedUsecase(postRepository);
}
exports.makeLoadFeedUsecase = makeLoadFeedUsecase;
