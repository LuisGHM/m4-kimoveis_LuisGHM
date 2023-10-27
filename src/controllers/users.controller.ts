import { Request, Response } from "express";
import User from "../entities/Users.entity";
import { getUsersService, postuserService } from "../services/users.service";
import { UserRead, UserReadList } from "../interfaces/users.interface";

export const postUsersController = async (req: Request, res: Response): Promise<Response> => {
    const newUser: UserRead = await postuserService(req.body);   

    return res.status(201).json(newUser);
}

export const getUsersController = async (req: Request, res: Response): Promise<Response> => {
    const newUser: UserReadList = await getUsersService();    

    return res.status(200).json(newUser);
}