import { Router } from "express";

const userRoute = Router();

userRoute.get('/',(req, res) =>{
    res.json({message:"tá funfando"})
})

export default userRoute;