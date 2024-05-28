import { Router } from "express";
import userRoute from "./userRoutes";
import taskRouter from "./taskRoutes";

const router = Router();

router.get("/", (req, res, next)=>{
    return res.json({message:"api on"})
})

router.use(userRoute);
router.use(taskRouter)

export default router;