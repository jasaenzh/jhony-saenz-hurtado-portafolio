import { Request, Response } from "express";
import { cathedAsync } from "../utils/catchedAsync";
import { findAllSkills, findByIdAndDeleteSkill, findByIdAndUpdateSkill, findByIdSkill, insertSkill } from "../services/skill.services";
import { responseController } from "../utils/responseControllers";
import { uploadFileCloudinary } from "../services/uploadFileCloudinary.services";


const postSkill = cathedAsync(async (req: Request, res: Response) => {
  let body = req.body
  const pathCloudinary = req.file?.path
  const urlCloudinary = await uploadFileCloudinary(`${pathCloudinary}`)
  body = { ...body, image: urlCloudinary }
  const saveSkill = await insertSkill(body);
  responseController(res, 200, saveSkill)
})

const getSkills = cathedAsync(async (req: Request, res: Response) => {
  const skills = await findAllSkills();
  responseController(res, 200, skills)
})

const getSkill = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const skill = await findByIdSkill(id)
  responseController(res, 200, skill)
})



const updateSkill = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const skillUpdated = await findByIdAndUpdateSkill(id, body);
  responseController(res, 200, skillUpdated)
})

const deleteSkill = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const skillDelete = await findByIdAndDeleteSkill(id)
  responseController(res, 200, skillDelete)
})

export { postSkill, getSkills, getSkill, updateSkill, deleteSkill }