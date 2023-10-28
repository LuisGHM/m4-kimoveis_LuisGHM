import { AppDataSource } from "./data-source";
import { Category } from "./entities";
import User from "./entities/Users.entity";
import { CategoryRepo } from "./interfaces/category.interface";
import { UserRepo } from "./interfaces/users.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User);

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);