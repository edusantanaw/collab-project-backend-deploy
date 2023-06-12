"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: "O email é obrigatorio!" }).email(),
    id: zod_1.z.string({ required_error: "O id do usuario é obrigatorio!" }),
});
