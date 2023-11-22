import { Request, Response } from "express";
import { findAll, findById } from "../services/users.services";
import { cathedAsync } from "../utils/catchedAsync";
import { response } from "../utils/response";

const getUsers = cathedAsync(async (req: Request, res: Response) => {
  const users = await findAll()
  response(res, 200, users)
})

const getUser = cathedAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await findById(parseInt(id))
  response(res, 200, user)
})

const postUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Estas en la ruta Users" })
  } catch (error) {
    console.log(error);
  }
}

const updateUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Estas en la ruta Users" })
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Estas en la ruta Users" })
  } catch (error) {
    console.log(error);
  }
}

export {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser
}