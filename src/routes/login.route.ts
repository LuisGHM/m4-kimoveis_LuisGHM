import { Router } from "express";
import { postLoginController } from "../controllers/login.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { loginSchema } from "../schemas/login.schema";

export const loginsRoute: Router = Router();

loginsRoute.post("/", validateBody(loginSchema), postLoginController);