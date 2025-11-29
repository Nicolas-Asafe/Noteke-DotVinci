import { Router } from "express";
import userController from "../controllers/user.controller.js";
import PersonMiddleware from "../middlewares/person.middleware.js";

const userRouter = Router();

userRouter.post("/new", userController.createUser);
userRouter.post("/login", userController.login);
userRouter.post("/person",PersonMiddleware,userController.person)

export default userRouter;