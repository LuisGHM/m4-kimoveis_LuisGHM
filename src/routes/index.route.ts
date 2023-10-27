import { Router } from "express";
import { usersRoute } from "./users.route";
import { loginsRoute } from "./login.route";

export const routes: Router = Router();

routes.use("/users", usersRoute);
routes.use("/login", loginsRoute);