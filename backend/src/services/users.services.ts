import { CreateUserDTO } from "../dto/createUser.dto";
import { UpdateUserDTO } from "../dto/updateUser.dto";
import { UserInterface, UserRole } from "../interfaces/user.interface";
import User from "../models/user.model";
import { ClientError } from "../utils/errorsResponse";

const insertUser = async (user: CreateUserDTO): Promise<UserInterface> => {
  const { firstName, secondName, lastName, secondLastName, birthdate } = user;
  if (!firstName || !lastName || !birthdate) {
    throw new ClientError("Falta informacion");
  }
  const newUser = await User.create({
    firstName,
    secondName,
    lastName,
    secondLastName,
    birthdate,
  });
  return newUser;
}

const findAllUsers = async (): Promise<UserInterface[]> => {
  const users = await User.findAll();
  return users
}

const findByIdUser = async (id: string) => {

  if (id.length !== 36) {
    throw new ClientError("Faltan caracteres en el campo ID")
  }

  const user = await User.findOne({ where: { id: id } });
  if (!user) {
    throw new ClientError("No se encuentra el ID");
  }
  return user
}

const findByIdAndUpdate = async (id: string, user: UpdateUserDTO) => {

  if (id.length !== 36) {
    throw new ClientError("Faltan caracteres en el campo ID")
  }

  const findUser = await User.findOne({ where: { id: id } });
  if (!findUser) {
    throw new ClientError("No se encuentra el ID");
  }

  const updateUser = await User.update(user, { where: { id: id } })

  if (!updateUser) {
    throw new ClientError("No se pudo actualizar");
  }

  const userUpdated = await User.findOne({ where: { id: id } });

  if (!userUpdated) {
    throw new ClientError("No se encuentra el ID");
  }

  return userUpdated
}

const findByIdAndDelete = async (id: string) => {

  if (id.length !== 36) {
    throw new ClientError("Faltan caracteres en el campo ID")
  }

  const removeUser = await User.destroy({ where: { id: id } })

  if (!removeUser) {
    throw new ClientError("No se encuentra el ID");
  }
  return removeUser;

}

export { findAllUsers, findByIdUser, insertUser, findByIdAndUpdate, findByIdAndDelete }