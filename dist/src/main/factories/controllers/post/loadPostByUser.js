"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadPostByUserController = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const loadPostByUser_1 = require("../../usecases/post/loadPostByUser");
function makeLoadPostByUserController() {
    return new load_1.LoadController((0, loadPostByUser_1.makeLoadPostByUserUsecase)());
}
exports.makeLoadPostByUserController = makeLoadPostByUserController;
