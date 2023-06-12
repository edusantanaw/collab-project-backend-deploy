"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const crypto_1 = require("crypto");
class Comment {
    id;
    postId;
    content;
    userId;
    constructor(data) {
        this.id = data.id ?? (0, crypto_1.randomUUID)();
        this.content = data.content;
        this.postId = data.postId;
        this.userId = data.userId;
    }
    getComment() {
        return {
            id: this.id,
            postId: this.postId,
            userId: this.userId,
            content: this.content,
        };
    }
}
exports.Comment = Comment;
