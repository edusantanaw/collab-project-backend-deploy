import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

try {
  prisma.$connect();
}catch(err){
  console.log(err);
}

const {
  user,
  collaborators,
  project,
  invites,
  task,
  message,
  post,
  comments,
  follows,
  likes,
  responses,
  room
} = prisma;

export {
  user,
  collaborators,
  project,
  invites,
  task,
  prisma,
  message,
  responses,
  post,
  comments,
  follows,
  likes,
  room  
};

export default prisma;
