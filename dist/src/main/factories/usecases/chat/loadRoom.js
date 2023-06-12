"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRoomUsecase = void 0;
const loadRoom_1 = require("../../../../data/usecases/chat/loadRoom");
const room_1 = require("../../../../infra/repositories/room");
const createRoom_1 = require("./createRoom");
function makeLoadRoomUsecase() {
    const chatRepository = new room_1.RoomRepository();
    return new loadRoom_1.LoadRoomUsecase(chatRepository, (0, createRoom_1.makeCreateRoomUsecase)());
}
exports.makeLoadRoomUsecase = makeLoadRoomUsecase;
