import { NextFunction, Response } from "express"
import { RequestExtends } from "../interfaces/reqExtends.interface"
import User from "../models/user.model";
import { UserRole } from "../interfaces/user.interface";
import { ClientError } from "../utils/errorsResponse";


const adminProfile = async (req: RequestExtends, res: Response, next: NextFunction) => {
  if (typeof req.user === 'object' && req.user !== null) {
    // Acceder a la propiedad 'id' si es un objeto
    const { id } = req.user
    const findUser = await User.findOne({ where: { id: id } })

    if (findUser?.role !== UserRole.ADMIN) {
      return res.status(401).json({
        error: true,
        data: "No tienes permisos para ingresar a esta ruta"
      })
    }

  }
  next();
}

export { adminProfile }