"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadPostByUserUsecase = void 0;
class LoadPostByUserUsecase {
    postRepository;
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async load(data) {
        const mappedData = this.mapData(data);
        const posts = await this.postRepository.loadPostByUserId(mappedData);
        if (posts.length === 0)
            return null;
        return posts;
    }
    mapData(data) {
        const initialPage = 0;
        const maxLoad = 30;
        const skip = Number(data.skip);
        const take = Number(data.take);
        return {
            skip: skip ? skip : initialPage,
            take: take ? (take > maxLoad ? maxLoad : take) : maxLoad,
            id: data.userId,
        };
    }
}
exports.LoadPostByUserUsecase = LoadPostByUserUsecase;
