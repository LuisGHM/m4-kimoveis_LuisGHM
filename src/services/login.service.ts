import { compare } from "bcryptjs";
import { User } from "../entities";
import AppError from "../errors/App.error";
import { Login, LoginReturn } from "../interfaces/login.interface";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export const postLoginService = async (data: Login): Promise<LoginReturn> => {
    const user: User | null = await userRepo.findOne({where: {email: data.email}});

    if (!user) {
        throw new AppError('Invalid credentials', 401);
    }

    const isPasswordValid = await compare(data.password, user.password);

    if (!isPasswordValid) {
        throw new AppError('Invalid credentials', 401);
    }

    const token = sign({email: user.email, admin: user.admin}, process.env.SECRET_KEY!, {
        subject: user.id.toString(),
        expiresIn: process.env.EXPIRES_IN!,
    });

    return { token }
}