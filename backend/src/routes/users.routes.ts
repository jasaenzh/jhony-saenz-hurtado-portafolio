import { Router } from "express";
import { getUser, getUsers, postUser, updateUser } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', postUser)
usersRouter.patch('/:id', updateUser)


export default usersRouter;