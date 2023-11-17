import { Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Estas en la ruta Users" })
  } catch (error) {
    console.log(error);
  }
}

const getUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Estas en la ruta Users" })
  } catch (error) {
    console.log(error);
  }
}

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

export { getUsers, getUser, postUser, updateUser, deleteUser }