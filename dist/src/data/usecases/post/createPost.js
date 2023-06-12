"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostUsecase = void 0;
const post_1 = require("../../../domain/entities/post");
class CreatePostUsecase {
    userRepository;
    postRepository;
    constructor(userRepository, postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }
    async execute({ userId, content, file: image }) {
        const userExists = await this.userRepository.loadById(userId);
        if (!userExists)
            throw new Error("User not exists!");
        const post = new post_1.Post({ userId, content, image });
        const newPost = await this.postRepository.create(post.getPost());
        return newPost;
    }
}
exports.CreatePostUsecase = CreatePostUsecase;
