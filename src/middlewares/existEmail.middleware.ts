import { NextFunction, Request, Response } from "express";
import User from "../entities/Users.entity";
import { userRepo } from "../repositories";
import AppError from "../errors/App.error";

export const existEmail = async (req: Request, res: Response, next:NextFunction): Promise<void> =>{
    const foundEmail: User | null = await userRepo.findOne({where: {email: req.body.email}});

    if (foundEmail) {
        throw new AppError("Email already exists", 409);
    }

    return next();
}