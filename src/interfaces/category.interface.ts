import { z } from "zod";
import { categoryCreateSchema, categorysReadSchema } from "../schemas/category.schema";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type CategoryCreate = z.infer<typeof categoryCreateSchema>;

export type CategoryRead = z.infer<typeof categorysReadSchema>;

export type CategoryRepo = Repository<Category>;