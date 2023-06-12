"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessage = void 0;
const message_1 = require("../../../domain/entities/message");
class SendMessage {
    messageRepository;
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async send(data) {
        const message = new message_1.Message(data);
        const newMessage = await this.messageRepository.create(message.getMessageContent());
        return newMessage;
    }
}
exports.SendMessage = SendMessage;
