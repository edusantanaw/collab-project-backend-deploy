"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadAllInvitesUsecase = void 0;
const loadAll_1 = require("../../../../data/usecases/generics/loadAll");
const inviteRepository_1 = require("../../../../infra/repositories/inviteRepository");
function makeLoadAllInvitesUsecase() {
    const inviteRepository = new inviteRepository_1.InviteRepository();
    return new loadAll_1.LoadAllUsecase(inviteRepository);
}
exports.makeLoadAllInvitesUsecase = makeLoadAllInvitesUsecase;
