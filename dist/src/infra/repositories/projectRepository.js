"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const prisma_1 = require("../prisma");
class ProjectRepository {
    async create(data) {
        const newProject = await prisma_1.project.create({
            data: {
                id: data.getId(),
                name: data.getName(),
                description: data.getDescription(),
                ownerId: data.getOwner(),
            },
        });
        return newProject;
    }
    async loadById(id) {
        const maybeProject = (await prisma_1.prisma.$queryRaw `
      select project.id, users.id as "userId", project.name, users.name as "ownerName", "perfilImage", "perfilPhoto", 
      count(collaborators."userId")::numeric::integer as "qtdCollabs",project."createdAt", project.description 
      from project inner join users on users.id = project."ownerId" left join collaborators 
      on collaborators."projectId" = project.id where project.id = ${id}
      group by project.id, users.id,"perfilImage", "perfilPhoto", project.name, users.name,project.description;
      `);
        return maybeProject[0];
    }
    async loadByName(name) {
        const projects = (await prisma_1.prisma.$queryRaw `
      SELECT * FROM project 
      WHERE lower(name) LIKE ${"%" + name.toLowerCase() + "%"}`);
        return projects;
    }
    async loadUserProjects(userId) {
        const projects = (await prisma_1.prisma.$queryRaw `
      select p.id, p.name, p."perfilImage" from project as p
      left join collaborators as c on c."projectId" = p.id
      where p."ownerId" = ${userId} or c."userId" = ${userId}
      group by p.id, p.name,p."perfilImage";
     `);
        return projects;
    }
}
exports.ProjectRepository = ProjectRepository;
