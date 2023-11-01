import { Router } from "express";
import { postScheduleController } from "../controllers/schedule.controller";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { verifyDisponibilityMiddleware } from "../middlewares/verifyDisponibility.middleware";
import { verifyDisponibilityUserMiddleware } from "../middlewares/verifyDisponibilityUser.middleware";
import { verifyBusinessHourMiddleware } from "../middlewares/verifyBusinessHour.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { scheduleCreateSchema } from "../schemas/schedule.schema";

export const scheduleRoute: Router = Router();

scheduleRoute.post("/", validateTokenMiddleware, validateBody(scheduleCreateSchema), verifyDisponibilityMiddleware, verifyDisponibilityUserMiddleware, verifyBusinessHourMiddleware, postScheduleController);

