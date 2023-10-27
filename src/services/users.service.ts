import { UserCreate, UserRead, UserReadList, UserUpdate } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { usersReadSchema, usersReturnSchema } from "../schemas/users.schema";
import { User } from "../entities";

export const postUserService = async (data: UserCreate): Promise<UserRead> => {
    const user: User = userRepo.create(data);

    await userRepo.save(user);

    return usersReturnSchema.parse(user);
}


export const getUsersService = async (): Promise<UserReadList> =>{
    const users: User[]= await userRepo.find();

    return usersReadSchema.parse(users);
}

export const patchUsersService = async (data: UserUpdate, user: User): Promise<UserRead> => {
    const Updateuser: User = await userRepo.save({...user, ...data});

    return usersReturnSchema.parse(Updateuser);
}

export const deleteUsersService = async (user: User) => {
    await userRepo.softDelete(user.id)
}

