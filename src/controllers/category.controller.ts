import { Request, Response } from "express";
import { Category } from "../entities";
import { postCategoryService } from "../services/category.service";

export const postCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const newCategory: Category = await postCategoryService(req.body);

    return res.status(201).json(newCategory);
}