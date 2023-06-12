"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const prisma_1 = require("../prisma");
class PostRepository {
    async create(data) {
        const newPost = await prisma_1.post.create({
            data: data,
        });
        return newPost;
    }
    async loadById(id) {
        const loadedPost = await prisma_1.post.findFirst({ where: { id } });
        return loadedPost;
    }
    async loadFeed(data) {
        const posts = (await prisma_1.prisma.$queryRaw `
      select post.content, post.image, post.id, users."perfilPhoto", users.name, users.id as "userId"
      from post inner join users on users.id = post."userId"
      left join follows on follows."followingId" = post."userId"
      where users.id = ${data.userId} or follows."followerId" = ${data.userId}
      order by post."createdAt" desc
      limit ${data.take} offset ${data.skip * data.take};
      `);
        return posts;
    }
    async loadPostByUserId({ id, take, skip }) {
        const posts = (await prisma_1.prisma.$queryRaw `
    select post.content, post.image, post.id, users.name, users."perfilPhoto",users.id as "userId"
    from post inner join users on users.id = post."userId"
    where users.id = ${id}
    order by post."createdAt" desc
    limit ${take} offset ${skip * take};
    `);
        console.log(posts);
        return posts;
    }
    async loadLike(postId, userId) {
        const like = await prisma_1.likes.findFirst({
            where: {
                postId,
                userId,
            },
        });
        return like;
    }
    async addLike(data) {
        await prisma_1.likes.create({
            data: data,
        });
    }
    async removeLike(id) {
        try {
            await prisma_1.likes.delete({
                where: {
                    id: id,
                },
            });
        }
        catch (error) {
            // Already deleted
            // Capture a possible error if then user spams the like button
        }
    }
    async loadLikes(id) {
        const userLikes = await prisma_1.likes.findMany({
            where: {
                postId: id,
            },
        });
        return userLikes.map((like) => like.userId);
    }
}
exports.PostRepository = PostRepository;
