import { ModelStatic } from "sequelize";
import Task from "../database/models/Task";
import { resp } from "../utils/response";
import { ITask } from "../interfaces";
import schema from "../validations/schema";

class TaskService {
    private model: ModelStatic<Task> = Task;

    async get(userId: number) {
        const tasks = await this.model.findAll({
            where: { userId },
        })
        return resp(200, tasks)
    }

    async getTaskById(userId: number, idTask: number) {
        const task = await this.model.findOne({
            where: {
                id: idTask,
                userId
            }
        })
        if (!task) return resp(404, "Task not found")
        return resp(200, task)
    }

    async update(userId: number, idTask: number, task: ITask) {
        const { error } = schema.task.validate(task)
        if (error) return resp(422, error.message)
        const hasTask = await this.model.findOne({
            where: {
                id: idTask,
                userId
            }
        })
        if (!hasTask) return resp(404, "Task not found")
        const [rowsAffected] = await this.model.update(task, {
            where: { id: idTask }
        })
        const taskUpdated = rowsAffected > 0;
        if(!taskUpdated) return resp(422,"Error during update")
        return resp(202, "task updated successfully")
    }

    async delete(userId: number, idTask: number){
        const task = await this.model.findOne({
            where: {
                id: idTask,
                userId
            }
        })
        if (!task) return resp(404, "Task not found")
        await this.model.destroy({where:{id:idTask, userId}})
        return resp(200, "task deleted successfully")
    }

    async create(task: ITask) {
        const { error } = schema.task.validate(task)
        if (error) return resp(422, error.message)
        const newTask = await this.model.create({ ...task })
        return resp(201, newTask)
    }

    async completed(userId: number, idTask: number){
        const task = await this.model.findOne({
            where: {
                id: idTask,
                userId
            }
        })
        if (!task) return resp(404, "Task not found")
        const [rowsAffected] = await this.model.update({isCompleted:true}, {
            where: { id: idTask }
        })
        const taskUpdated = rowsAffected > 0;
        if(!taskUpdated) return resp(422,"Error during update")
        return resp(202, "")
    }
}

export default TaskService;