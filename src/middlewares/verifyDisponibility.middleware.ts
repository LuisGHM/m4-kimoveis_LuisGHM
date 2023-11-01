import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepo } from "../repositories";
import AppError from "../errors/App.error";

export const verifyDisponibilityMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const date: Schedule | null = await scheduleRepo.findOne({where: {realEstate: {id: req.body.realEstateId} , date: req.body.date, hour: req.body.hour}});   

    if(date){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409);
    }

    return next();
}