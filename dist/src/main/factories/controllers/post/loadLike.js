"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadLikeController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadLikes_1 = require("../../usecases/post/loadLikes");
function makeLoadLikeController() {
    return new loadById_1.LoadByIdController((0, loadLikes_1.makeLoadLikesUsecase)());
}
exports.makeLoadLikeController = makeLoadLikeController;
