"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAllInvitesController = void 0;
const loadAll_1 = require("../../../../presentational/controllers/loadAll");
const loadInvites_1 = require("../../usecases/user/loadInvites");
function makeLoadAllInvitesController() {
    return new loadAll_1.LoadAll((0, loadInvites_1.makeLoadAllInvitesUsecase)());
}
exports.makeLoadAllInvitesController = makeLoadAllInvitesController;
