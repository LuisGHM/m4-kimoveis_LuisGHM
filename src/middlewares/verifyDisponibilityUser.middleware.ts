import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepo } from "../repositories";
import AppError from "../errors/App.error";

export const verifyDisponibilityUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const user: Schedule | null = await scheduleRepo.findOne({where: {user:{id: res.locals.decod.sub}, date: req.body.date, hour: req.body.hour}});

    console.log(req.body);
    console.log(user);
    
    if(user) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 403);
    }

    return next();
}