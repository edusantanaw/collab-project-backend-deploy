"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRepository = void 0;
const prisma_1 = require("../prisma");
class RoomRepository {
    async create(data) {
        const newRoom = await prisma_1.room.create({
            data: data,
        });
        return newRoom;
    }
    async loadRoom(userId, followingId) {
        const mayberRoom = await prisma_1.room.findFirst({
            where: {
                OR: [
                    {
                        userId: userId,
                        followingId: followingId,
                    },
                    {
                        userId: followingId,
                        followingId: userId,
                    },
                ],
            },
        });
        if (mayberRoom)
            return mayberRoom.id;
        return null;
    }
    async loadById(roomId) {
        const mayberRoom = await prisma_1.room.findFirst({
            where: {
                id: roomId,
            },
        });
        return mayberRoom;
    }
}
exports.RoomRepository = RoomRepository;
