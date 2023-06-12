"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCommentsController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadComments_1 = require("../../usecases/post/loadComments");
function makeLoadCommentsController() {
    return new loadById_1.LoadByIdController((0, loadComments_1.makeLoadCommentsUsecase)());
}
exports.makeLoadCommentsController = makeLoadCommentsController;
