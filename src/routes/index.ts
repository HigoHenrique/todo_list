import { Router } from "express";
import userRoute from "./userRoutes";
import taskRouter from "./taskRoutes";

const router = Router();

router.use(userRoute);
router.use(taskRouter)

export default router;