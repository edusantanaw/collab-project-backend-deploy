"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const crypto_1 = require("crypto");
class Post {
    id;
    content;
    image;
    userId;
    constructor(data) {
        if (!data.content && !data.image)
            throw new Error("Content or image is required!");
        this.id = data.id ?? (0, crypto_1.randomUUID)();
        this.content = data.content;
        this.image = data.image;
        this.userId = data.userId;
    }
    getPost() {
        return {
            id: this.id,
            content: this.content,
            image: this.image,
            userId: this.userId,
        };
    }
}
exports.Post = Post;
