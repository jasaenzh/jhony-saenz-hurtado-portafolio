import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/users.controllers";
import { checkJWT } from "../middlewares/session.middleware";
import { adminProfile } from "../middlewares/adminSession.middleware";

const usersRouter = Router();

usersRouter.get('/', checkJWT, adminProfile, getUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', postUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)


export default usersRouter;