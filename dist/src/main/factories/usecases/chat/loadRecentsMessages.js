"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecentMessagesUsecase = void 0;
const loadRecentMessages_1 = require("../../../../data/usecases/chat/loadRecentMessages");
const massage_1 = require("../../../../infra/repositories/massage");
function makeLoadRecentMessagesUsecase() {
    const messagesRepository = new massage_1.MessageRepository();
    return new loadRecentMessages_1.LoadRecentMessages(messagesRepository);
}
exports.makeLoadRecentMessagesUsecase = makeLoadRecentMessagesUsecase;
