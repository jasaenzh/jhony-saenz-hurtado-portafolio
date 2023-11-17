import "dotenv/config";
import express, { Express } from "express";
import cors from "cors";
import morgan from 'morgan';
import { router } from "./routes/index.routes";


// Creo el servidor
const app: Express = express();


//Middlewares
app.use(morgan("dev"))
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Ruta principal
app.use('/api/v1', router)

export { app }