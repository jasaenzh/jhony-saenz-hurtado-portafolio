import { UserInterface } from "../interfaces/user.interface";
import User from "../models/user.model"
import { ClientError } from "../utils/errorsResponse";
import { encrypt } from "../utils/hashPwd.handle";

const registerNewUser = async ({ firstName, secondName, lastName, secondLastName, birthdate, email, password }: UserInterface) => {

  if (!firstName || !lastName || !birthdate || !email || !password) {
    throw new ClientError("Falta informacion", 400);
  }

  const findUser = await User.findOne({ where: { email: email } })

  if (findUser) {
    throw new ClientError("Usuario ya existe!");
  }

  const pwdHash = await encrypt(password)

  const newUser = await User.create({
    firstName,
    secondName,
    lastName,
    secondLastName,
    birthdate,
    email,
    password: pwdHash
  })

  return newUser

}

const loginUser = async () => {

}

export { registerNewUser, loginUser }