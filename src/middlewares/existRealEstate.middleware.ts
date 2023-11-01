import { NextFunction, Request, Response } from "express";
import { realEstateRepo } from "../repositories";
import AppError from "../errors/App.error";

export const existRealEstateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const foundRealEstate = await realEstateRepo.findOne({where: {id: +req.params.id}});

    if (!foundRealEstate) {
        throw new AppError("RealEstate not found", 404)
    }

    return next();
}