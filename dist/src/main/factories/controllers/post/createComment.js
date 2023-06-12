"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateCommentController = void 0;
const create_1 = require("../../../../presentational/controllers/create");
const comment_1 = require("../../../../validation/schema/comment");
const validSchema_1 = require("../../../../validation/validSchema");
const createComment_1 = require("../../usecases/post/createComment");
function makeCreateCommentController() {
    const validSchema = new validSchema_1.ValidSchema(comment_1.commentSchema);
    return new create_1.CreateController((0, createComment_1.makeCreateCommentUsecase)(), validSchema);
}
exports.makeCreateCommentController = makeCreateCommentController;
