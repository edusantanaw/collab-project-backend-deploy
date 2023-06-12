"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRoomUsecase = void 0;
class LoadRoomUsecase {
    chatRepository;
    createRoomUsecase;
    constructor(chatRepository, createRoomUsecase) {
        this.chatRepository = chatRepository;
        this.createRoomUsecase = createRoomUsecase;
    }
    async load({ followingId, userId }) {
        const maybeRoom = await this.chatRepository.loadRoom(userId, followingId);
        if (!maybeRoom) {
            const newRoom = await this.createRoomUsecase.execute({
                followingId,
                userId,
            });
            return newRoom.id;
        }
        return maybeRoom;
    }
}
exports.LoadRoomUsecase = LoadRoomUsecase;
