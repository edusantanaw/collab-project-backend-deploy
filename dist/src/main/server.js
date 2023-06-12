"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./config/routes"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_1 = __importDefault(require("./routes/socket"));
const socket_2 = __importDefault(require("./config/socket"));
const PORT = process.env.PORT;
class Server {
    app = (0, express_1.default)();
    PORT = PORT ?? 3000;
    server = http_1.default.createServer(this.app);
    io = (0, socket_2.default)(this.server);
    middlewares() {
        this.app.use((0, cors_1.default)({ credentials: true, origin: "*" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    start() {
        const cb = () => console.log(`Server running at ${this.PORT}`);
        this.server.listen(this.PORT, cb);
    }
    bootstrap() {
        this.middlewares();
        (0, routes_1.default)(this.app);
        (0, socket_1.default)(this.io);
        this.start();
    }
}
exports.Server = Server;
