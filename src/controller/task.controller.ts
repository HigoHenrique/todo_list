import {NextFunction, Request, Response} from 'express'
import TaskService from '../services/task.service'

class TaskController{
    private service = new TaskService();

    async get(req: Request, res: Response, next: NextFunction){
        try {
            const userId = res.locals.user.id
            const {status, message } = await this.service.get(userId)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async getTaskById(req: Request, res: Response, next: NextFunction){
        try {
            const userId = res.locals.user.id
            const {taskId} = req.params;
            const {status, message } = await this.service.getTaskById(userId, +taskId)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const userId = res.locals.user.id
            const {taskId} = req.params;
            const {status, message } = await this.service.update(userId, +taskId, req.body)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const userId = res.locals.user.id
            req.body.userId = userId
            const {status, message} = await this.service.create(req.body)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const userId = res.locals.user.id
            const {taskId} = req.params;
            const {status, message } = await this.service.delete(userId, +taskId)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async completed(req: Request, res: Response, next: NextFunction){
        try {
            const userId = res.locals.user.id
            const {taskId} = req.params;
            const {status, message } = await this.service.completed(userId, +taskId)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
}

export default TaskController;