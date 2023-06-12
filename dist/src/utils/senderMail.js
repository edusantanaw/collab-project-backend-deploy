"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderMailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_2 = __importDefault(require("../../config/nodemailer"));
class SenderMailer {
    async send(data) {
        const sendMail = this.makeTransport();
        await sendMail.sendMail({
            subject: data.subject,
            text: data.text,
            from: `Eduardo Santana <${nodemailer_2.default.user}>`,
            to: data.to,
        });
    }
    makeTransport() {
        const transport = nodemailer_1.default.createTransport({
            host: nodemailer_2.default.host,
            port: nodemailer_2.default.port,
            secure: false,
            auth: {
                user: nodemailer_2.default.user,
                pass: nodemailer_2.default.pass,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        return transport;
    }
}
exports.SenderMailer = SenderMailer;
