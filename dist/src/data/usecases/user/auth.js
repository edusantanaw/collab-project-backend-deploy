"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUsecase = void 0;
class AuthUsecase {
    repository;
    encrypter;
    generateToken;
    constructor(repository, encrypter, generateToken) {
        this.repository = repository;
        this.encrypter = encrypter;
        this.generateToken = generateToken;
    }
    async auth(email, password) {
        const user = await this.repository.loadByEmail(email);
        console.log(user);
        if (!user)
            throw new Error("User not found!");
        const passMatch = await this.encrypter.compare(password, user.password);
        if (!passMatch)
            throw new Error("Password is invalid!");
        const token = await this.generateToken.generate(user);
        return { token, user };
    }
}
exports.AuthUsecase = AuthUsecase;
