import { createUser, login } from "../controllers/user.controller.js";
import { Router } from "express";

const userRouter = Router()

userRouter.post("/create-user", createUser)
userRouter.post("/login", login)

export default userRouter