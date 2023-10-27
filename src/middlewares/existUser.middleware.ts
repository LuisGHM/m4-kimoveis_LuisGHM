import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { User } from "../entities";
import AppError from "../errors/App.error";

export const existUserMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const user: User | null = await userRepo.findOneBy({id: +req.params.id});
    
    if (!user) { 
        throw new AppError("User not found", 404);
    }

    res.locals = {...res.locals, user}; 

    return next();

}

