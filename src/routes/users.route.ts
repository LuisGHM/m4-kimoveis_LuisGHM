import { Router } from "express";
import { deleteUsersController, getUsersController, patchUsersController, postUsersController } from "../controllers/users.controller";
import { existEmail } from "../middlewares/existEmail.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { usersCreateSchema, usersUpdateSchema } from "../schemas/users.schema";
import { existUserMiddleware } from "../middlewares/existUser.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { validatePermissionsMiddleware } from "../middlewares/validatePermissions.middleware";

export const usersRoute: Router = Router();

usersRoute.post("/", validateBody(usersCreateSchema), existEmail,  postUsersController);
usersRoute.get("/", validateTokenMiddleware, validateAcessMiddleware, getUsersController);
usersRoute.patch("/:id", validateBody(usersUpdateSchema), validateTokenMiddleware, existUserMiddleware, validatePermissionsMiddleware, existUserMiddleware, patchUsersController);
usersRoute.delete("/:id", validateTokenMiddleware, existUserMiddleware,validateAcessMiddleware, existUserMiddleware, deleteUsersController);