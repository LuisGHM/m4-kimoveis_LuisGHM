import { Category } from "../entities";
import { CategoryCreate } from "../interfaces/category.interface";
import { categoryRepo } from "../repositories";

export const postCategoryService = async (data: CategoryCreate): Promise<Category> =>{
    const newCategory: Category = await categoryRepo.save(data);
    
    return newCategory;
}