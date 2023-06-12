"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_util_1 = require("node:util");
class JwtToken {
    secret = "any_secret";
    async generate(user) {
        const token = await (0, node_util_1.promisify)(jsonwebtoken_1.default.sign)(user, this.secret);
        return token;
    }
    decodeUser(token) {
        try {
            const userId = jsonwebtoken_1.default.decode(token);
            return userId;
        }
        catch (error) {
            return null;
        }
    }
    tokenIsValid(token) {
        try {
            jsonwebtoken_1.default.verify(token, this.secret);
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.JwtToken = JwtToken;
