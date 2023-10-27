import { Request, Response } from "express";
import User from "../entities/Users.entity";
import { deleteUsersService, getUsersService, patchUsersService, postUserService } from "../services/users.service";
import { UserRead, UserReadList } from "../interfaces/users.interface";

export const postUsersController = async (req: Request, res: Response): Promise<Response> => {
    const newUser: UserRead = await postUserService(req.body);   

    return res.status(201).json(newUser);
}

export const getUsersController = async (req: Request, res: Response): Promise<Response> => {
    const Users: UserReadList = await getUsersService();    

    return res.status(200).json(Users);
}

export const patchUsersController = async (req: Request, res: Response): Promise<Response> => {
    const newUser = await patchUsersService(req.body, res.locals.user);

    return res.status(200).json(newUser);
}

export const deleteUsersController = async (req: Request, res: Response): Promise<Response> => {
    await deleteUsersService(res.locals.user);

    return res.status(204).json();
}