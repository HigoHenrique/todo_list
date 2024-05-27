import jwt, { SignOptions } from 'jsonwebtoken';
import "dotenv/config";
import {NextFunction, Request, Response} from 'express'

const jwtSecret = process.env.JWT_SECRET as string

const sign = (payload: {id: number, email: string}, expiresIn ='1d') =>{
    const jwtConfig: SignOptions = {
        algorithm: "HS256",
        expiresIn
    }
    const token = jwt.sign(payload, jwtSecret, jwtConfig)
    return token
}

const verifyToken = (req: Request, res: Response, next: NextFunction) =>{
    try {
        const token = req.header('Authorization')
        if(!token) return res.status(401).json({message: 'Unauthorized'})
        const decoded = jwt.verify(token, jwtSecret);
        res.locals.user = decoded;
        next()
    } catch (error) {
        next(error)
    }
}

export {sign, verifyToken}