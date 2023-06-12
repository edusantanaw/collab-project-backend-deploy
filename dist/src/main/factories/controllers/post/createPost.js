"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreatePostController = void 0;
const create_1 = require("../../../../presentational/controllers/create");
const postSchema_1 = require("../../../../validation/schema/postSchema");
const validSchema_1 = require("../../../../validation/validSchema");
const cratePost_1 = require("../../usecases/post/cratePost");
function makeCreatePostController() {
    const validSchema = new validSchema_1.ValidSchema(postSchema_1.postSchema);
    return new create_1.CreateController((0, cratePost_1.makeCreatePostUsecase)(), validSchema);
}
exports.makeCreatePostController = makeCreatePostController;
