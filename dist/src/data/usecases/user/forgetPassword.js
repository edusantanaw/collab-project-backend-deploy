"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordUsecase = void 0;
const node_crypto_1 = require("node:crypto");
class ForgetPasswordUsecase {
    sendMail;
    userRepositoy;
    constructor(sendMail, userRepositoy) {
        this.sendMail = sendMail;
        this.userRepositoy = userRepositoy;
    }
    async execute(email) {
        const maybeUser = await this.userRepositoy.loadByEmail(email);
        if (!maybeUser)
            throw new Error("User not exists!");
        const cod = (0, node_crypto_1.randomUUID)();
        await this.sendMail.send({
            subject: "Recuperar senha",
            text: `Codigo de recuperação é ${cod}`,
            to: email,
        });
        return cod;
    }
}
exports.ForgetPasswordUsecase = ForgetPasswordUsecase;
