import { ModelStatic } from "sequelize";
import User from "../database/models/User";
import { IUSer } from "../interfaces";
import schema from '../validations/schema';
import { resp, respM } from "../utils/response";
import md5 from "md5";
import { sign } from "../jwt/jwt";

class UserService {
    private model: ModelStatic<User> = User;

    async login(body: { email: string, password: string }) {
        const { email, password } = body
        const hashPassword = md5(password)
        const user = await this.model.findOne({
            where: {
                email: email,
                password: hashPassword,
            }
        })
        if(!user) return resp(404, "User not found")
        const token = sign({id:user.id, email})
        return resp(200, {id:user.id, email, token})
    }

    async create(user: IUSer) {
        console.log(user)
        const { error } = schema.user.validate(user)
        if (error) return respM(422, error.message)
        const hashPassword = md5(user.password)
        const newUser = await this.model.create({ ...user, password: hashPassword })
        return resp(201, newUser)
    }
}

export default UserService