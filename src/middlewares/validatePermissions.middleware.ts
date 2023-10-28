import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const validatePermissionsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const admin: Boolean = res.locals.decod.admin
    const userId: number = +res.locals.decod.sub
    const id: number = +req.params.id

    console.log(userId, id);
    

    if(admin){
        return next();
    }

    if (id !== userId) {
        throw new AppError('Insufficient permission', 403)
    }

    return next();
}