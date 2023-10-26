import { Router } from "express";
import { postUsersController } from "../controllers/users.controller";
import { existEmail } from "../middlewares/existEmail.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { usersCreateSchema } from "../schemas/users.schema";

export const usersRoute: Router = Router();

usersRoute.post("/", validateBody(usersCreateSchema), existEmail,  postUsersController);