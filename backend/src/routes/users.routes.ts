import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/users.controllers";
import { checkJWT } from "../middlewares/session.middleware";
import { adminProfile } from "../middlewares/adminSession.middleware";

const usersRouter = Router();

usersRouter.get('/', getUsers)
usersRouter.get('/:id', checkJWT, adminProfile, getUser)
// usersRouter.post('/', postUser)
usersRouter.patch('/:id', checkJWT, adminProfile, updateUser)
usersRouter.delete('/:id', checkJWT, adminProfile, deleteUser)


export default usersRouter;