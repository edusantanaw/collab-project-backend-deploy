"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
exports.default = (server) => {
    return new socket_io_1.default.Server(server, {
        cors: {
            origin: "*",
            methods: "*",
        },
    });
};
