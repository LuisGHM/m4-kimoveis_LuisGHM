import { Category } from "../entities";
import AppError from "../errors/App.error";
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

export const getCategoryByIdService = async (id: number): Promise<Category> =>{
    const Categories: Category | null = await categoryRepo.findOne({where: {id: id}, relations:{realEstate: true}});

    if(!Categories){
        throw new AppError("Category not found", 404);
    }
    
    return Categories;
}

