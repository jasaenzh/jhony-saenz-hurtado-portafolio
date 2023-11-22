import { ClientError } from "../utils/errorsResponse";

const data = [
  {
    id: 1,
    titulo: "Hola"
  },
  {
    id: 2,
    titulo: "Mundo"
  }
]

const findAll = async () => {
  return data
}

const findById = async (id: number) => {
  const user = data.find((e) => e.id === id);
  if (!user) {
    throw new ClientError("Invalid ID", 401);

  }
  return user
}

export { findAll, findById }