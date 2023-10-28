import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepo } from "../repositories";
import AppError from "../errors/App.error";

export const existCategoryNameMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const foundname: Category | null = await categoryRepo.findOne({where: {name: req.body.name}});

    if (foundname) {
        throw new AppError("Category already exists", 409);
    }

    return next();
}