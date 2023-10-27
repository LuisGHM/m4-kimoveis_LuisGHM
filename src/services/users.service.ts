import { hashSync } from "bcryptjs";
import { UserCreate, UserRead, UserReadList } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { usersReadSchema, usersReturnSchema } from "../schemas/users.schema";
import { User } from "../entities";

export const postuserService = async (data: UserCreate): Promise<UserRead> =>{
    data.password = hashSync(data.password, 12);

    const newUser: User = await userRepo.save(data);

    return usersReturnSchema.parse(newUser);
}

export const getUsersService = async (): Promise<UserReadList> =>{
    const users: User[]= await userRepo.find();

    return usersReadSchema.parse(users);
}