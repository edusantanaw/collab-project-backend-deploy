"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
function getToken(req) {
    const auth = req.headers.authorization;
    if (!auth)
        throw "Access denied!";
    const token = auth.split(" ")[1];
    return token;
}
exports.getToken = getToken;
