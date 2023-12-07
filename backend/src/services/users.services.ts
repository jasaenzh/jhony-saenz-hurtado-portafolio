import { CreateUserDTO } from "../schemas/createUser.dto";
import { UpdateUserDTO } from "../schemas/updateUser.dto";
import { UserInterface } from "../interfaces/user.interface";
import Experience from "../models/experience.model";
import Project from "../models/project.model";
import Skill from "../models/skill.model";
import User from "../models/user.model";
import { ClientError } from "../utils/errorsResponse";

const insertUser = async (user: CreateUserDTO): Promise<UserInterface> => {
  const { firstName, secondName, lastName, secondLastName, birthdate, aboutMe } = user;

  if (!firstName || !lastName || !birthdate) {
    throw new ClientError("Falta informacion");
  }

  console.log("FECHA DE CUMPLEAÑOS:", user.birthdate);

  const convertToSequelizeDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    const formattedDate = `${year}-${month}-${day} 00:00:00`;
    return new Date(formattedDate);
  };

  // Obtener la fecha actual
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const formattedCurrentDate = new Date(`${currentYear}-${currentMonth}-${currentDay}`);
  console.log("FECHA:", formattedCurrentDate);



  const newUser = await User.create({
    firstName,
    secondName,
    lastName,
    secondLastName,
    aboutMe,
    birthdate: convertToSequelizeDate(user.birthdate),
  });
  return newUser;
}

const findAllUsers = async (): Promise<UserInterface[]> => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Skill,
        attributes: { exclude: ['id'] },
        through: { attributes: [] },
      },
      {
        model: Project
      },
      {
        model: Experience
      }
    ],
  });
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
    throw new ClientError("No se pudo eliminar el registro");
  }
  return removeUser;

}

export { findAllUsers, findByIdUser, insertUser, findByIdAndUpdate, findByIdAndDelete }