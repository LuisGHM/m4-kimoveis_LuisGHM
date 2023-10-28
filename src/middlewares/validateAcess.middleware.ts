import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const validateAcessMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const {admin} = res.locals.decod

    if (!admin) {
        throw new AppError("Insufficient permission", 403)
    }

    return next();
}