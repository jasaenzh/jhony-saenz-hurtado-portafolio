import { NextFunction, Request, Response } from "express";

// recibe una funcion y retorna una funcion y ante cualquier problema lo envia al manejador de errores de express
const cathedAsync = (fn: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res).catch((err: any) => next(err));
  };
};

export { cathedAsync };