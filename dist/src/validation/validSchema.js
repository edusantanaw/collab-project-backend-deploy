"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidSchema = void 0;
class ValidSchema {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    valid(data) {
        const isSchemaValid = this.schema.safeParse(data);
        if (isSchemaValid.success) {
            return { error: null };
        }
        return { error: isSchemaValid.error.errors[0] };
    }
}
exports.ValidSchema = ValidSchema;
