"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAllMessagesController = void 0;
const loadAll_1 = require("../../../../presentational/controllers/loadAll");
const loadMessages_1 = require("../../usecases/project/loadMessages");
function makeLoadAllMessagesController() {
    return new loadAll_1.LoadAll((0, loadMessages_1.makeLoadMessages)());
}
exports.makeLoadAllMessagesController = makeLoadAllMessagesController;
