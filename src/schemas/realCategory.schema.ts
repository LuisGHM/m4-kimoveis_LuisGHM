import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    value: z.string().or(z.number().positive()),
    size: z.number().positive().int(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().int().positive(),
        city: z.string().max(20),
        state: z.string().max(2),
    }),
    categoryId: z.number().positive().int(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const realEstateCreateSchema = realEstateSchema.omit({id: true, sold: true, createdAt: true, updatedAt: true});

export const realEstatesReadSchema = realEstateSchema.array();