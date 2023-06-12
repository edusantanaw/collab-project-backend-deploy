import { Express, Router } from "express"
import {router as chatRouter} from '../routes/chat-routes'
import {router as postRouter} from '../routes/post-routes'
import {router as userRouter} from '../routes/user-routes'
import {router as projectRouter} from '../routes/project-routes'

export default async(app: Express) =>{
  app.get("/ping", (req, res)=> {
      console.log("working");
    return res.status(200).json({ola: 'ola' });
  });
  app.use("/api", chatRouter);
  app.use("/api", postRouter);
  app.use("/api", userRouter);
  app.use("/api", projectRouter);
}
