"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendMessageUsecase = void 0;
const sendMessage_1 = require("../../../../data/usecases/project/sendMessage");
const massage_1 = require("../../../../infra/repositories/massage");
function makeSendMessageUsecase() {
    const messageRepository = new massage_1.MessageRepository();
    return new sendMessage_1.SendMessage(messageRepository);
}
exports.makeSendMessageUsecase = makeSendMessageUsecase;
