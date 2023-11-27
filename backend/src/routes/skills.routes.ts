import { Router } from "express";
import { deleteSkill, getSkill, getSkills, postSkill, updateSkill } from "../controllers/skill.controllers";
import { upload } from "../middlewares/multer.middleware";

const skillRouter = Router();

skillRouter.post('/', upload.single('image'), postSkill)
skillRouter.get('/', getSkills)
skillRouter.get('/:id', getSkill)
skillRouter.patch('/:id', updateSkill)
skillRouter.delete('/:id', deleteSkill)


export default skillRouter;