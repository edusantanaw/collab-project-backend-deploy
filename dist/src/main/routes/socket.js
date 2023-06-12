"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMessage_1 = require("../factories/usecases/project/sendMessage");
const sendMessage = (0, sendMessage_1.makeSendMessageUsecase)();
exports.default = (io) => {
    io.on("connect", (socket) => {
        socket.on("join_room", (data) => {
            socket.join(data);
        });
        socket.on("send_message", async (data) => {
            const newMessage = await sendMessage.send(data);
            socket.to(newMessage.room).emit("receive_message", newMessage);
        });
        socket.on("leave_room", (room) => {
            socket.leave(room);
        });
        socket.on("disconnect", (data) => {
            console.log("disconnect:", socket.id);
        });
    });
};
