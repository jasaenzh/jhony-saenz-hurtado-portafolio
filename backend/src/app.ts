import "dotenv/config";
import express, { Express } from "express";
import { router } from "./routes/index.routes";
import { setMiddlewares } from "./utils/setMiddlewares";

// Creo el servidor
const app: Express = express();

//Middlewares
setMiddlewares(app)

// Ruta principal
app.use('/api/v1', router)

export { app }