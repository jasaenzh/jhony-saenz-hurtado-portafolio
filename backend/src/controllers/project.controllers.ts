import { Request, Response } from "express";
import { cathedAsync } from "../utils/catchedAsync";
import { findAllProject, insertProject } from "../services/project.services";
import { responseController } from "../utils/responseControllers";

const postProject = cathedAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const newProject = await insertProject(body, req)
  newProject.setUser(body.userId)
  const { skills } = req.body
  if (skills && skills.length > 0) await newProject.addSkills(skills);
  responseController(res, 200, newProject)
})

const getProjects = cathedAsync(async (req: Request, res: Response) => {
  const projects = await findAllProject();
  responseController(res, 200, projects)
})

export { postProject, getProjects }