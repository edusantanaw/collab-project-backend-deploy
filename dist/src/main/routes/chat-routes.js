"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_adapter_1 = require("../adapter/auth-adapter");
const loadMessages_1 = require("../factories/controllers/chat/loadMessages");
const loadRecentMessages_1 = require("../factories/controllers/chat/loadRecentMessages");
const loadRoom_1 = require("../factories/controllers/chat/loadRoom");
const authAdapter = new auth_adapter_1.UserAdapter();
function default_1(router) {
    router.get("/chat/room/:userId", authAdapter.make((0, loadRoom_1.makeLoadRoomController)()));
    router.get("/messages/recent/:id", authAdapter.make((0, loadRecentMessages_1.makeLoadRecentMessagesController)()));
    router.get("/messages/:id", authAdapter.make((0, loadMessages_1.makeLoadMessagesByRoomController)()));
}
exports.default = default_1;
