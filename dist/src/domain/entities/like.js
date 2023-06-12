"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const crypto_1 = require("crypto");
class Like {
    id;
    postId;
    userId;
    constructor(data) {
        this.id = data.id ?? (0, crypto_1.randomUUID)();
        this.postId = data.postId;
        this.userId = data.userId;
    }
    getLike() {
        return {
            id: this.id,
            postId: this.postId,
            userId: this.userId,
        };
    }
}
exports.Like = Like;
