"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRoomController = void 0;
const load_1 = require("../../../../presentational/controllers/load");
const loadRoom_1 = require("../../usecases/chat/loadRoom");
function makeLoadRoomController() {
    return new load_1.LoadController((0, loadRoom_1.makeLoadRoomUsecase)());
}
exports.makeLoadRoomController = makeLoadRoomController;
