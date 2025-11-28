import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/new", userController.createUser);
userRouter.post("/login", userController.login);


export default userRouter;