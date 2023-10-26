import { z } from "zod";

export const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable().default(null)
});

export const usersCreateSchema = usersSchema.omit({id: true, createdAt: true, updatedAt: true, deletedAt: true})

export const usersUpdateSchema = usersCreateSchema.partial();

export const usersReturnSchema = usersSchema.omit({password: true});

export const usersReadSchema = usersReturnSchema.array();