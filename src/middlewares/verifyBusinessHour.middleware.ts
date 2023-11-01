import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const verifyBusinessHourMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const date = new Date(req.body.date).getDay();

    console.log(date);
    
    if((date === 5) || (date === 6)){
        throw new AppError('Invalid date, work days are monday to friday', 400);
    } 

    const time = Number(req.body.hour.split(':')[0]);
    if((time < 8) || (time > 18)){
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
    }

    return next();
} 