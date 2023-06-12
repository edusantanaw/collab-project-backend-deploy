"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadMessagensByRoomUsecase = void 0;
const loadAll_1 = require("../../../../data/usecases/generics/loadAll");
const massage_1 = require("../../../../infra/repositories/massage");
function makeLoadMessagensByRoomUsecase() {
    const messageRepository = new massage_1.MessageRepository();
    return new loadAll_1.LoadAllUsecase(messageRepository);
}
exports.makeLoadMessagensByRoomUsecase = makeLoadMessagensByRoomUsecase;
