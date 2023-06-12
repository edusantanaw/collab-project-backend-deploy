"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.noContent = exports.ok = exports.error = exports.created = exports.badRequest = void 0;
function badRequest(message) {
    return {
        statusCode: 400,
        body: message,
    };
}
exports.badRequest = badRequest;
function created(data) {
    return {
        statusCode: 200,
        body: data,
    };
}
exports.created = created;
function error(error) {
    return {
        statusCode: 400,
        body: error.message,
    };
}
exports.error = error;
function ok(data) {
    return {
        statusCode: 200,
        body: data,
    };
}
exports.ok = ok;
function noContent() {
    return {
        statusCode: 204,
        body: "no_content",
    };
}
exports.noContent = noContent;
function serverError(e) {
    return {
        statusCode: 500,
        body: e,
    };
}
exports.serverError = serverError;
