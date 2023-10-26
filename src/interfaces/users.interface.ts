import { z } from "zod";
import { usersCreateSchema, usersReadSchema, usersReturnSchema, usersSchema, usersUpdateSchema } from "../schemas/users.schema";
import { Repository } from "typeorm";
import User from "../entities/Users.entity";

export type UserCreate = z.infer<typeof usersCreateSchema>;

export type UserRead = z.infer<typeof usersReturnSchema>;

export type UserReadList = z.infer<typeof usersReadSchema>;

export type UserUpdate = z.infer<typeof usersUpdateSchema>;

export type UserRepo = Repository<User>;