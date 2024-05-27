import joi, { date } from "joi";

const user = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
})

const task = joi.object({
    title: joi.string().min(2).required(),
    description:joi.string().min(10).required(),
    date: joi.string().min(6).max(10).required(),
    priorityLevel: joi.string().valid('alta', 'media', 'baixa').required(),
    userId: joi.number().integer().required(),
})

export = {user, task}