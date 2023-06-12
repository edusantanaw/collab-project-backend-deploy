"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCommentsUsecase = void 0;
const loadAll_1 = require("../../../../data/usecases/generics/loadAll");
const commentRepository_1 = require("../../../../infra/repositories/commentRepository");
function makeLoadCommentsUsecase() {
    return new loadAll_1.LoadAllUsecase(new commentRepository_1.CommentRepository());
}
exports.makeLoadCommentsUsecase = makeLoadCommentsUsecase;
