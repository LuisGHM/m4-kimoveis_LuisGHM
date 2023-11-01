import { Router } from "express";
import { getScheduleRealEstateController, postScheduleController } from "../controllers/schedule.controller";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { verifyDisponibilityMiddleware } from "../middlewares/verifyDisponibility.middleware";
import { verifyDisponibilityUserMiddleware } from "../middlewares/verifyDisponibilityUser.middleware";
import { verifyBusinessHourMiddleware } from "../middlewares/verifyBusinessHour.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { scheduleCreateSchema } from "../schemas/schedule.schema";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { existRealEstateMiddleware } from "../middlewares/existRealEstate.middleware";

export const scheduleRoute: Router = Router();

scheduleRoute.post("/", validateTokenMiddleware, validateBody(scheduleCreateSchema), verifyDisponibilityMiddleware, verifyDisponibilityUserMiddleware, verifyBusinessHourMiddleware, postScheduleController);
scheduleRoute.get("/realEstate/:id", validateTokenMiddleware, validateAcessMiddleware, existRealEstateMiddleware, getScheduleRealEstateController)

