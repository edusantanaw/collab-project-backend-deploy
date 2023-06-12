"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const zod_1 = require("zod");
exports.commentSchema = zod_1.z.object({
    userId: zod_1.z.string({ required_error: "User id is required!" }),
    content: zod_1.z.string({ required_error: "Content is required!" }),
});
