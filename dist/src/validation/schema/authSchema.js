"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
const zod_1 = require("zod");
exports.authSchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: "O email é obrigatorio!" }).email(),
    password: zod_1.z
        .string({ required_error: "A senha é necessaria!" })
        .min(5, "Password must have more than 5 characteres!")
        .max(20, "Password must have less than 20 characteres!"),
});
