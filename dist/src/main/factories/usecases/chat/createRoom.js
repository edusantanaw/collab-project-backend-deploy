"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateRoomUsecase = void 0;
const createRoom_1 = require("../../../../data/usecases/chat/createRoom");
const room_1 = require("../../../../infra/repositories/room");
function makeCreateRoomUsecase() {
    const roomRepository = new room_1.RoomRepository();
    return new createRoom_1.CreateRoomUsecase(roomRepository);
}
exports.makeCreateRoomUsecase = makeCreateRoomUsecase;
