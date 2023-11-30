import { Router } from "express";
import usersRouter from "./users.routes";
import authRouter from "./auth.routes";
import skillRouter from "./skills.routes";
import projectRouter from "./project.routes";
import experiencesRouter from "./experience.routes";


const router = Router();

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/skills', skillRouter)
router.use('/projects', projectRouter)
router.use('/experiences', experiencesRouter)


export { router }