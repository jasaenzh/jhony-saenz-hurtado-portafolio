import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controllers";
import { upload } from "../middlewares/multer.middleware";

const authRouter = Router();

authRouter.post('/register', upload.single('image'), registerController)
authRouter.post('/login', loginController)


export default authRouter;