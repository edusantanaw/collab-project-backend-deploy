"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadMessages = void 0;
const loadAll_1 = require("../../../../data/usecases/generics/loadAll");
const massage_1 = require("../../../../infra/repositories/massage");
function makeLoadMessages() {
    const messageRepository = new massage_1.MessageRepository();
    return new loadAll_1.LoadAllUsecase(messageRepository);
}
exports.makeLoadMessages = makeLoadMessages;
