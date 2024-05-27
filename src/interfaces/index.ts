interface IUSer {
    id?: number
    email: string
    password: string
}

interface ITask {
    id?: number
    title: string
    description: string
    date: string
    priorityLevel: string
    isCompleted: boolean
    userId: string
}

export {ITask, IUSer}