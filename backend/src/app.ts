import "dotenv/config";
import express, { Express, NextFunction, Request, Response } from "express";
import { router } from "./routes/index.routes";
import { setMiddlewares } from "./utils/setMiddlewares";

// Creo el servidor
const app: Express = express();

//Middlewares
setMiddlewares(app)

// Ruta principal
app.use('/api/v1', router)

// Middlware de errores
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    error: true,
    message: err.message
  })
})

export { app }