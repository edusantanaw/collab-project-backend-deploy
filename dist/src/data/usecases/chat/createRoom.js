"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomUsecase = void 0;
const room_1 = require("../../../domain/entities/room");
class CreateRoomUsecase {
    chatRepository;
    constructor(chatRepository) {
        this.chatRepository = chatRepository;
    }
    async execute(data) {
        const newRoom = new room_1.Room(data);
        const room = await this.chatRepository.create(newRoom.getRoom());
        return room;
    }
}
exports.CreateRoomUsecase = CreateRoomUsecase;
