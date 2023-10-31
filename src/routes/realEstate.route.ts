import { Router } from "express";
import { getRealEstateController, postRealEstateController } from "../controllers/realEstate.controller";
import { existAddressMiddleware } from "../middlewares/existAddress.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { realEstateCreateSchema } from "../schemas/realCategory.schema";

export const realEstateRoute: Router = Router();

realEstateRoute.post("/", validateTokenMiddleware, validateAcessMiddleware, validateBody(realEstateCreateSchema), existAddressMiddleware, postRealEstateController);
realEstateRoute.get("/", getRealEstateController);