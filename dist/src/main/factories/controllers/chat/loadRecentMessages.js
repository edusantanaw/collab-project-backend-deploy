"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecentMessagesController = void 0;
const loadById_1 = require("../../../../presentational/controllers/loadById");
const loadRecentsMessages_1 = require("../../usecases/chat/loadRecentsMessages");
function makeLoadRecentMessagesController() {
    return new loadById_1.LoadByIdController((0, loadRecentsMessages_1.makeLoadRecentMessagesUsecase)());
}
exports.makeLoadRecentMessagesController = makeLoadRecentMessagesController;
