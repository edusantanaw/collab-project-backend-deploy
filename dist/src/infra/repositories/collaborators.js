"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorRepository = void 0;
const crypto_1 = require("crypto");
const prisma_1 = require("../prisma");
class CollaboratorRepository {
    async create(projectId, userId) {
        await prisma_1.collaborators.create({
            data: {
                id: (0, crypto_1.randomUUID)(),
                projectId,
                userId,
            },
        });
    }
    async loadAll(projectId) {
        console.log(projectId);
        const collabs = await prisma_1.prisma.$queryRaw `
      select users.id, "perfilPhoto", users.name from users left join project
      on project."ownerId" = users.id
      where project.id = ${projectId} or users.id in (
        select "userId" from collaborators 
        where "projectId" = ${projectId}
      )
      group by users.id, "perfilPhoto", users.name
      ;
    `;
        return collabs;
    }
}
exports.CollaboratorRepository = CollaboratorRepository;
