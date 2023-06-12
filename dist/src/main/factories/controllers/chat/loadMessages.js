"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadMessagesByRoomController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadMessages_1 = require("../../usecases/chat/loadMessages");
function makeLoadMessagesByRoomController() {
    return new loadById_1.LoadByIdController((0, loadMessages_1.makeLoadMessagensByRoomUsecase)());
}
exports.makeLoadMessagesByRoomController = makeLoadMessagesByRoomController;
