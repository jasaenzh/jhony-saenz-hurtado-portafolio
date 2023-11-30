import { Router } from "express";
import { postExperience, getExperiences } from "../controllers/experience.controllers";


const experiencesRouter = Router();

experiencesRouter.post('/', postExperience)
experiencesRouter.get('/', getExperiences)

export default experiencesRouter;