import { Request, Response } from "express";
import { cathedAsync } from "../utils/catchedAsync";
import { findAllExperience, insertExperience } from "../services/experience.services";
import { responseController } from "../utils/responseControllers";

const postExperience = cathedAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const newExperience = await insertExperience(body)
  newExperience.setUser(body.userId)
  responseController(res, 200, newExperience)
})

const getExperiences = cathedAsync(async (req: Request, res: Response) => {
  const experiences = await findAllExperience();
  responseController(res, 200, experiences)
})

export { postExperience, getExperiences }