import express, { Express } from "express";
import cors from "cors";
import morgan from 'morgan';

const NODE_ENV = process.env.NODE_ENV;

const setMiddlewares = (app: Express) => {
  NODE_ENV === "dev" && app.use(morgan("dev"))
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
}

export { setMiddlewares }