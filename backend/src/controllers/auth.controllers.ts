import { Request, Response } from "express";
import { loginServiceUser, registerServiceNewUser } from "../services/auth.services";
import { responseController } from "../utils/responseControllers";
import { cathedAsync } from "../utils/catchedAsync";

const registerController = cathedAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const registerUser = await registerServiceNewUser(body);
  responseController(res, 200, registerUser)
})


const loginController = cathedAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const loginUser = await loginServiceUser(body)
  responseController(res, 200, loginUser)
})


export { registerController, loginController };