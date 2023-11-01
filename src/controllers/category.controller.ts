import { Request, Response } from "express";
import { Category } from "../entities";
import { getCategoryByIdService, getCategoryService, postCategoryService } from "../services/category.service";
import { CategoryRead } from "../interfaces/category.interface";

export const postCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const newCategory: Category = await postCategoryService(req.body);

    return res.status(201).json(newCategory);
}

export const getCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await getCategoryService();

    return res.status(200).json(categories);
}

export const getCategoryByIdController = async (req: Request, res: Response): Promise<Response> => {
    const categories: Category = await getCategoryByIdService(+req.params.id);

    return res.status(200).json(categories);
}