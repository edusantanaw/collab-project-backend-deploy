"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const crypto_1 = require("crypto");
class Room {
    userId;
    followingId;
    id;
    constructor(data) {
        this.userId = data.userId;
        this.followingId = data.followingId;
        this.id = data.id ?? (0, crypto_1.randomUUID)();
    }
    getRoom() {
        return {
            id: this.id,
            userId: this.userId,
            followingId: this.followingId,
        };
    }
}
exports.Room = Room;
