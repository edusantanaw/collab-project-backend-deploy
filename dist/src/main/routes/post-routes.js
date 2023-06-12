"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_adapter_1 = require("../adapter/auth-adapter");
const addOrRemoveLike_1 = require("../factories/controllers/post/addOrRemoveLike");
const createComment_1 = require("../factories/controllers/post/createComment");
const createPost_1 = require("../factories/controllers/post/createPost");
const feed_1 = require("../factories/controllers/post/feed");
const loadComments_1 = require("../factories/controllers/post/loadComments");
const loadLike_1 = require("../factories/controllers/post/loadLike");
const loadPostByUser_1 = require("../factories/controllers/post/loadPostByUser");
const upload_file_1 = require("../middlewares/upload-file");
const authAdapter = new auth_adapter_1.UserAdapter();
function default_1(router) {
    router.post("/post", upload_file_1.fileUpload, authAdapter.make((0, createPost_1.makeCreatePostController)()));
    router.get("/post/perfil/:userId", authAdapter.make((0, loadPostByUser_1.makeLoadPostByUserController)()));
    router.get("/feed/:userId", authAdapter.make((0, feed_1.makeLoadFeedController)()));
    router.post("/post/like/:userId", authAdapter.make((0, addOrRemoveLike_1.makeAddOrRemovePostLikeController)()));
    router.get("/post/like/:id", authAdapter.make((0, loadLike_1.makeLoadLikeController)()));
    router.post("/post/comment", authAdapter.make((0, createComment_1.makeCreateCommentController)()));
    router.get("/post/comment/:id", authAdapter.make((0, loadComments_1.makeLoadCommentsController)()));
}
exports.default = default_1;
