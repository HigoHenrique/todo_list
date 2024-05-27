import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
import router from "./routes";
import { Error } from "sequelize";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    return res.status(500).json({message: err.message})
})

export default app