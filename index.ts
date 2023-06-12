import { Server } from "./src/main/server";
import prisma from '../infra/prisma';

const server  = new Server();


process.on("exit", ()=> {
    prisma.$disconnect(); 
})

server.bootstrap();
