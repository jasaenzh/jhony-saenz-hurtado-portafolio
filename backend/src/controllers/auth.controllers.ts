import { Request, Response } from "express";
import { loginServiceUser, registerServiceNewUser } from "../services/auth.services";
import { responseController } from "../utils/responseControllers";
import { cathedAsync } from "../utils/catchedAsync";
import { uploadFileCloudinary } from "../services/uploadFileCloudinary.services";


const registerController = cathedAsync(async (req: Request, res: Response) => {
  let body = req.body;
  // const pathCloudinary = req.file?.path
  const pathCloudinary = req.file ? req.file?.path : undefined;
  const urlCloudinary = await uploadFileCloudinary(`${pathCloudinary}`)
  console.log("ERROR CLOUDINARY", uploadFileCloudinary);
  if (urlCloudinary) {
    body = { ...body, image: urlCloudinary }
  }
  console.log("BODY:", body);
  const registerUser = await registerServiceNewUser(body);
  const { skills } = req.body
  if (skills && skills.length > 0) await registerUser.addSkills(skills);
  responseController(res, 200, registerUser)
})


const loginController = cathedAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const loginUser = await loginServiceUser(body)
  responseController(res, 200, loginUser)
})


export { registerController, loginController };