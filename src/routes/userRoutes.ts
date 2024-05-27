import { Router } from "express";
import UserController from "../controller/user.controller";

const controller = new UserController();
const userRoute = Router();

userRoute.post('/login', controller.login.bind(controller))
userRoute.post('/user', controller.create.bind(controller))

export default userRoute;