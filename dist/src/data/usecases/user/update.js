"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUsecase = void 0;
const user_1 = require("../../../domain/entities/user");
class UpdateUserUsecase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const userExists = await this.userRepository.loadById(data.id);
        if (!userExists)
            throw new Error("Usuario não existe!");
        if (userExists.email !== data.email) {
            const emailAlreadyUsed = await this.userRepository.loadByEmail(data.email);
            if (emailAlreadyUsed)
                throw new Error("O email já está sendo usado!");
        }
        const user = new user_1.User({ ...data, password: userExists.password });
        const updatedUser = await this.userRepository.update(user.getUser());
        return updatedUser;
    }
}
exports.UpdateUserUsecase = UpdateUserUsecase;
