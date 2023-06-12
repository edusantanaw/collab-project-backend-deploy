"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const prisma_1 = require("../prisma");
class MessageRepository {
    async create(data) {
        const newMessage = await prisma_1.message.create({
            data: data,
        });
        return newMessage;
    }
    async loadAll(room) {
        const messages = await prisma_1.message.findMany({
            where: {
                room: room,
            },
            orderBy: {
                createdAt: "asc"
            }
        });
        return messages;
    }
    async loadReceivedMessages(userId) {
        const recentMessages = (await prisma_1.prisma.$queryRaw `
    select m."room", m.message , m."createdAt"
    from (
      select distinct on ("room") "room", "message", "createdAt"
      from "message"
      where "room" in (
      select "id" from "room"
      where "userId" = ${userId} OR "followingId" = ${userId}
      )
      order by "room", "createdAt" desc
    ) as m
    order by m."createdAt" desc;`);
        const data = [];
        for (let i = 0; i < recentMessages.length; i++) {
            const user = (await prisma_1.prisma.$queryRaw `
      select users.id, "perfilPhoto", name, email
      from users inner join room 
      on room."userId" = users.id or room."followingId" = users.id
      where room.id = ${recentMessages[i].room} and  users.id != ${userId};  
    `);
            data.push({
                userId: user[0].id,
                message: recentMessages[i].message,
                room: recentMessages[i].room,
                perfilPhoto: user[0].perfilPhoto,
                name: user[0].name,
                email: user[0].email
            });
        }
        return data;
    }
}
exports.MessageRepository = MessageRepository;
