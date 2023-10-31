import { NextFunction, Request, Response } from "express";
import { addressRepo } from "../repositories";
import AppError from "../errors/App.error";

export const existAddressMiddleware = async (req: Request, res:Response, next: NextFunction): Promise<void> => {
    const address = req.body.address
    const foundAddress = await addressRepo.findOne({where: {street: address.street, zipCode: address.zipCode, number: address.number, state: address.state}});
    
    if (foundAddress) {
        throw new AppError("Address already exists", 409);
    }

    return next();
}