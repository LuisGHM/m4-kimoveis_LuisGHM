import { z } from "zod";
import { realEstateCreateSchema, realEstatesReadSchema } from "../schemas/realCategory.schema";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";

export type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;

export type RealEstateRead = z.infer<typeof realEstatesReadSchema>;

export type RealEstateRepo = Repository<RealEstate>;

export type AddressRepo = Repository<Address>