"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const crypto_1 = require("crypto");
class Message {
    id;
    message;
    file;
    senderId;
    room;
    constructor(data) {
        if (!data.message && !data.file)
            throw new Error("file or data is required!");
        this.id = data.id ?? (0, crypto_1.randomUUID)();
        this.message = data.message;
        this.file = data.file;
        this.senderId = data.senderId;
        this.room = data.room;
    }
    getMessageContent() {
        return {
            id: this.id,
            message: this.message,
            file: this.file,
            senderId: this.senderId,
            room: this.room,
        };
    }
    getId() {
        return this.id;
    }
    getMessageC() {
        this.message;
    }
    getFile() {
        return this.file;
    }
    getSender() {
        return this.senderId;
    }
    getRoom() {
        return this.room;
    }
    setMessage(msg) {
        this.message = msg;
    }
    setFile(file) {
        this.file = file;
    }
    setSender(id) {
        return (this.senderId = id);
    }
}
exports.Message = Message;
