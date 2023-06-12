"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = require("../prisma");
class UserRepository {
    async save(data) {
        const newUser = await prisma_1.user.create({
            data: {
                ...data.getUser(),
            },
        });
        return newUser;
    }
    async loadByEmail(email) {
        const users = await prisma_1.user.findFirst({
            where: {
                email: email,
            },
        });
        return users;
    }
    async loadById(id) {
        const findUser = await prisma_1.user.findFirst({ where: { id } });
        return findUser;
    }
    async update(data) {
        const updatedUser = await prisma_1.user.update({
            where: {
                id: data.id,
            },
            data: data,
        });
        return updatedUser;
    }
    async updatePassword(id, pass) {
        await prisma_1.user.update({
            where: {
                id: id,
            },
            data: {
                password: pass,
            },
        });
    }
    async loadByName(name) {
        const users = (await prisma_1.prisma.$queryRaw `
      select id, name, email, "perfilPhoto" 
      from users
      where lower(name) like ${"%" + name.toLowerCase() + "%"}
    `);
        return users;
    }
}
exports.UserRepository = UserRepository;
