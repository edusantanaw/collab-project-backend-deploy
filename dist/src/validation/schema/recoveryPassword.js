"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverySchema = void 0;
const zod_1 = require("zod");
exports.recoverySchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: "Email is required!" }).email(),
    password: zod_1.z
        .string({ required_error: "Password is required!" })
        .min(5, "Password must have more than 5 characteres!")
        .max(20, "Password must have less than 20 characteres!"),
    confirmPassword: zod_1.z
        .string({ required_error: "Password is required!" })
        .min(5, "Password must have more than 5 characteres!")
        .max(20, "Password must have less than 20 characteres!")
});
