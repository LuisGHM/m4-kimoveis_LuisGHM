import { Request, Response } from "express";
import { Category } from "../entities";
import { getCategoryService, postCategoryService } from "../services/category.service";
import { CategoryRead } from "../interfaces/category.interface";

export const postCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const newCategory: Category = await postCategoryService(req.body);

    return res.status(201).json(newCategory);
}


export const getCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await getCategoryService();

    return res.status(200).json(categories);
}