"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveryPassword = void 0;
class RecoveryPassword {
    userRepository;
    encrypter;
    generateToken;
    constructor(userRepository, encrypter, generateToken) {
        this.userRepository = userRepository;
        this.encrypter = encrypter;
        this.generateToken = generateToken;
    }
    async execute(data) {
        const user = await this.userRepository.loadByEmail(data.email);
        if (!user)
            throw new Error("User not exists!");
        const hashPassword = await this.encrypter.genHash(data.password);
        await this.userRepository.updatePassword(user.id, hashPassword);
        const token = await this.generateToken.generate(user);
        return token;
    }
}
exports.RecoveryPassword = RecoveryPassword;
