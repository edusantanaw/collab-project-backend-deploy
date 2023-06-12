"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAcceptOrDeclieInviteController = void 0;
const acceptOrDeclineInvite_1 = require("../../../../presentational/controllers/acceptOrDeclineInvite");
const acceptOrDeclineInvite_2 = require("../../usecases/project/acceptOrDeclineInvite");
function makeAcceptOrDeclieInviteController() {
    return new acceptOrDeclineInvite_1.AcceptOrDeclineInviteController((0, acceptOrDeclineInvite_2.makeAcceptOrDeclineInviteUsecase)());
}
exports.makeAcceptOrDeclieInviteController = makeAcceptOrDeclieInviteController;
