import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate } from "./entities";
import User from "./entities/Users.entity";
import { CategoryRepo } from "./interfaces/category.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";
import { UserRepo } from "./interfaces/users.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User);

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);

export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate);

export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);