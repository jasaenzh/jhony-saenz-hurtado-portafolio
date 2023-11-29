import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import { getProjects, postProject } from "../controllers/project.controllers";

const projectRouter = Router();

projectRouter.post('/', upload.array('images'), postProject)
projectRouter.get('/', getProjects)
projectRouter.get('/:id')
projectRouter.patch('/:id')
projectRouter.delete('/:id')


export default projectRouter;