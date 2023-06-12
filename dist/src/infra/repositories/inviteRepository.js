"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteRepository = void 0;
const prisma_1 = require("../prisma");
class InviteRepository {
    async invite(data) {
        await prisma_1.invites.create({
            data: {
                ...data.getInvite(),
            },
        });
    }
    async loadAll(userId) {
        const allInvites = await prisma_1.prisma.$queryRaw `
      select invites.id, project.name, "perfilImage" from invites inner join project 
      on project.id = invites."projectId" 
      where "invitedId" = ${userId} and accepted is null
      order by invites."createdAt" asc;
      ;
    `;
        return allInvites;
    }
    async loadById(id) {
        const invite = await prisma_1.invites.findFirst({ where: { id: id } });
        if (!invite)
            return null;
        return invite;
    }
    async updateStatus(inviteId, accepted) {
        await prisma_1.invites.update({
            where: {
                id: inviteId,
            },
            data: {
                accepted: accepted,
            },
        });
    }
}
exports.InviteRepository = InviteRepository;
