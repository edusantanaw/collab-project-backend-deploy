"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUsecase = void 0;
const user_1 = require("../../../domain/entities/user");
class CreateUserUsecase {
    userRepository;
    encrypter;
    generateToken;
    constructor(userRepository, encrypter, generateToken) {
        this.userRepository = userRepository;
        this.encrypter = encrypter;
        this.generateToken = generateToken;
    }
    async execute(data) {
        const emailAlreadyUsed = !!(await this.userRepository.loadByEmail(data.email));
        if (emailAlreadyUsed)
            throw new Error("Email is already being used!");
        const hashedPassord = await this.encrypter.genHash(data.password);
        console.log(data);
        const user = new user_1.User(data);
        user.setPassword(hashedPassord);
        await this.userRepository.save(user);
        const token = await this.generateToken.generate(user.getUser());
        return { token, user: user.getUser() };
    }
}
exports.CreateUserUsecase = CreateUserUsecase;
