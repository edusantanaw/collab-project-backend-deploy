"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecentMessages = void 0;
class LoadRecentMessages {
    messagesRepository;
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async load(id) {
        const messages = await this.messagesRepository.loadReceivedMessages(id);
        console.log(id, messages);
        if (messages.length === 0)
            return null;
        return messages;
    }
}
exports.LoadRecentMessages = LoadRecentMessages;
