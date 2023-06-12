"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Encrypter {
    rounds = 10;
    async genHash(password) {
        const salt = await bcrypt_1.default.genSalt(this.rounds);
        const hashedPassword = await bcrypt_1.default.hash(password, salt);
        return hashedPassword;
    }
    async compare(password, hashedPassword) {
        const isMatch = await bcrypt_1.default.compare(password, hashedPassword);
        return isMatch;
    }
}
exports.Encrypter = Encrypter;
