import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import User from "../models/user.model";
import { RequestExtends } from "../interfaces/reqExtends.interface";
import { ClientError } from "../utils/errorsResponse";

const checkJWT = (req: RequestExtends, res: Response, next: NextFunction) => {

  try {

    // Obtener el jwt que genera el usuario
    const jwtByUser = req.headers.authorization || '';

    if (!jwtByUser) {
      throw new ClientError("No se recibió el token")
    }

    // Separo el Bearer y el token solo devuelvo el token
    const jwt = jwtByUser.split(' ').pop()

    if (!jwt) {
      throw new ClientError("Token no proporcionado")
    }

    (async () => {
      if (typeof req.user === 'object' && req.user !== null) {
        const { id } = req.user;
        const findUser = await User.findOne({ where: { id: id } });

        if (!findUser) {
          throw new ClientError("No tienes permisos para acceder a esta ruta", 401)
        }
      }
    })()

    const validUser = verifyToken(`${jwt}`)

    if (!validUser) {
      throw new ClientError("Token no válido");
    } else {
      req.user = validUser
      next();
    }

  } catch (error) {
    throw new ClientError("Sesión no valida", 401)
  }

}

export { checkJWT }