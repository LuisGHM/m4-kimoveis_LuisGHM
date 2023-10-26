import { Request, Response } from "express";
import User from "../entities/Users.entity";
import { postuserService } from "../services/users.service";
import { UserRead } from "../interfaces/users.interface";

export const postUsersController = async (req: Request, res: Response): Promise<Response> => {
    const newUser: UserRead = await postuserService(req.body);
    
    console.log(typeof(newUser.createdAt) + " aqui");
    

    return res.status(201).json(newUser);
}