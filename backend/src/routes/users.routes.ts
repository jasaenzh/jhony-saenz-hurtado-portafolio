import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', postUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)


export default usersRouter;