"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = void 0;
const node_crypto_1 = require("node:crypto");
class Invite {
    id;
    invitedId;
    projectId;
    accepted;
    constructor({ invitedId, projectId, id, accepted }) {
        this.invitedId = invitedId;
        this.projectId = projectId;
        this.id = id ?? (0, node_crypto_1.randomUUID)();
        this.accepted = accepted;
    }
    getInvite() {
        return {
            id: this.id,
            invitedId: this.invitedId,
            projectId: this.projectId,
            status: this.accepted,
        };
    }
    getId() {
        return this.id;
    }
    getInvitedId() {
        return this.invitedId;
    }
    getProjectId() {
        return this.projectId;
    }
    gettAccepted() {
        return this.accepted;
    }
    setInvitedId(invitedId) {
        this.invitedId = invitedId;
    }
    setProjectId(projectId) {
        this.projectId = projectId;
    }
    setAccepted(accepted) {
        this.accepted = accepted;
    }
}
exports.Invite = Invite;
