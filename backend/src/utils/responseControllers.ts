import { Response } from "express";

// Funcion que esta encargada de responder
const responseController = (res: Response, statusCode: number, data: any) => {
  res.status(statusCode).json({
    error: false,
    data
  })
}

export { responseController }