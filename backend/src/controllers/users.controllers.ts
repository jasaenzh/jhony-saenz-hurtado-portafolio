import { Request, Response } from "express";
import { findAllUsers, findByIdAndDelete, findByIdAndUpdate, findByIdUser, insertUser } from "../services/users.services";
import { cathedAsync } from "../utils/catchedAsync";
import { responseController } from "../utils/responseControllers";

const getUsers = cathedAsync(async (req: Request, res: Response) => {
  const users = await findAllUsers()
  responseController(res, 200, users)
})

const getUser = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await findByIdUser(id)
  responseController(res, 200, user)
})

const postUser = cathedAsync(async (req: Request, res: Response) => {
  const body = req.body
  const saveUser = await insertUser(body)
  responseController(res, 200, saveUser)
})


const updateUser = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const userUpdated = await findByIdAndUpdate(id, body)
  responseController(res, 200, userUpdated)
})

const deleteUser = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userDeleted = await findByIdAndDelete(id)
  responseController(res, 200, userDeleted)
})

export {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser
}