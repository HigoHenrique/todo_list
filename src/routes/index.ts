import { Router } from "express";
import userRoute from "./userRoutes";

const router = Router();

router.use(userRoute);

export default router;