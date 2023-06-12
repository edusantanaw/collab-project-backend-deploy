"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const zod_1 = require("zod");
exports.projectSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: "Name is required!" })
        .min(3, "Name must have more than 3 characteres!")
        .max(15, "Name must have less than 15 characteres!"),
    description: zod_1.z
        .string({ required_error: "Description is required!" })
        .min(1)
        .max(250),
    ownerId: zod_1.z.string({ required_error: "Owner id is required!" }),
});
