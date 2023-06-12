"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddOrRemovePostLikeController = void 0;
const addOrRemoveLike_1 = require("../../../../presentational/controllers/addOrRemoveLike");
const addOrRemoveLike_2 = require("../../usecases/post/addOrRemoveLike");
function makeAddOrRemovePostLikeController() {
    return new addOrRemoveLike_1.AddOrRemovePostLikeController((0, addOrRemoveLike_2.makeAddOrRemovePostLikeUsecase)());
}
exports.makeAddOrRemovePostLikeController = makeAddOrRemovePostLikeController;
