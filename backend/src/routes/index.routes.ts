import { Router } from "express";
import usersRouter from "./users.routes";
import authRouter from "./auth.routes";
import skillRouter from "./skills.routes";

const router = Router();

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/skills', skillRouter)


export { router }