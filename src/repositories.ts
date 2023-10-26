import { AppDataSource } from "./data-source";
import User from "./entities/Users.entity";
import { UserRepo } from "./interfaces/users.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User)