import { Category } from "../entities";
import { CategoryCreate, CategoryRead } from "../interfaces/category.interface";
import { categoryRepo } from "../repositories";

export const postCategoryService = async (data: CategoryCreate): Promise<Category> =>{
    const newCategory: Category = await categoryRepo.save(data);
    
    return newCategory;
}

export const getCategoryService = async (): Promise<CategoryRead> =>{
    const newCategory: CategoryRead = await categoryRepo.find();
    
    return newCategory;
}

