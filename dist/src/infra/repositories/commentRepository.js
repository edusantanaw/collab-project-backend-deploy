"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const prisma_1 = require("../prisma");
class CommentRepository {
    async create(data) {
        const newComment = await prisma_1.comments.create({
            data: data
        });
        return newComment;
    }
    async loadAll(postId) {
        const data = await prisma_1.prisma.$queryRaw `
      select "perfilPhoto", name, users.id  as "userId", content, "postId"
      from comment inner join users on users.id = comment."userId"
      where "postId" = ${postId};
    `;
        return data;
    }
}
exports.CommentRepository = CommentRepository;
