import { Express, Router } from "express"
import chatRouter from '../routes/chat-routes'
import postRouter from '../routes/post-routes'
import userRouter from '../routes/user-routes'
import projectRouter from '../routes/project-routes'

export default async(app: Express) =>{
  app.use("/api", chatRouter);
  app.use("/api", postRouter);
  app.use("/api", userRouter);
  app.use("/api", projectRouter);
}
