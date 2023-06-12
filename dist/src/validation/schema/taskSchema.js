"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const zod_1 = require("zod");
exports.taskSchema = zod_1.z.object({
    title: zod_1.z
        .string({ required_error: "O titulo é obrigatorio!" })
        .min(3, "O título deve ter pelo menos 3 caracteres!")
        .max(20, "O título deve conter no maximo 20 caracteres"),
    description: zod_1.z
        .string({ required_error: "A descrição é obrigatoria!" })
        .min(5, "A descrição deve conter pelo menos 5 caracteres!")
        .max(250, "A descrição deve conter no maximo 250 caracteres!"),
    projectId: zod_1.z.string({ required_error: "O id do projeto é necessario!" }),
});
