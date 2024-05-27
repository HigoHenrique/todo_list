import { Router } from "express";
import TaskController from "../controller/task.controller";
import {verifyToken} from '../jwt/jwt'

const taskRouter = Router();
const controller = new TaskController();

taskRouter.get('/task',verifyToken,controller.get.bind(controller))
taskRouter.get('/task/:taskId',verifyToken,controller.getTaskById.bind(controller))
taskRouter.put('/task/:taskId', verifyToken, controller.update.bind(controller))
taskRouter.post('/task',verifyToken,controller.create.bind(controller))
taskRouter.delete('/task/:taskId',verifyToken, controller.delete.bind(controller))
taskRouter.patch('/task/:taskId',verifyToken, controller.completed.bind(controller))

export default taskRouter