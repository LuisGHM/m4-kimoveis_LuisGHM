import { Router } from "express";
import { postCategoryController } from "../controllers/category.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/category.schema";
import { existCategoryNameMiddleware } from "../middlewares/existCategoryName.middleware";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";

export const categoryRoute: Router = Router()

categoryRoute.use("/", validateBody(categoryCreateSchema), validateTokenMiddleware, validateAcessMiddleware, existCategoryNameMiddleware, postCategoryController);