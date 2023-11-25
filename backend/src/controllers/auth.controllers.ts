import { Request, Response } from "express";
import { registerNewUser } from "../services/auth.services";
import { responseController } from "../utils/responseControllers";
import { cathedAsync } from "../utils/catchedAsync";

const registerController = cathedAsync(async (req: Request, res: Response) => {

  const body = req.body;

  console.log(body);

  const registerUser = await registerNewUser(body);

  console.log(registerUser);

  responseController(res, 200, registerUser)

})


const loginController = async (req: Request, res: Response) => {

}


export { registerController, loginController };