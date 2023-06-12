"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowRepository = void 0;
const prisma_1 = require("../prisma");
class FollowRepository {
    async create(data) {
        await prisma_1.follows.create({
            data: {
                followerId: data.userId,
                followingId: data.followingId,
            },
        });
    }
    async loadFollowing(id) {
        const users = (await prisma_1.prisma.$queryRaw `
      SELECT users.* FROM follows 
      JOIN users ON follows."followingId" = users.id 
      WHERE follows."followerId" = ${id};
    `);
        return users;
    }
}
exports.FollowRepository = FollowRepository;
