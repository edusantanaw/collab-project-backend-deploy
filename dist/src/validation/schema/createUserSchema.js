"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: "Name is required!" })
        .min(3, "Name must have more than 3 characteres!")
        .max(30, "Name must have less than 30 characteres!"),
    email: zod_1.z.string({ required_error: "Email is required!" }).email(),
    password: zod_1.z
        .string({ required_error: "Password is required!" })
        .min(5, "Password must have more than 5 characteres!")
        .max(20, "Password must have less than 20 characteres!"),
});
