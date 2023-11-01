import { Router } from "express";
import { usersRoute } from "./users.route";
import { loginsRoute } from "./login.route";
import { categoryRoute } from "./category.route";
import { realEstateRoute } from "./realEstate.route";
import { scheduleRoute } from "./schedule.route";

export const routes: Router = Router();

routes.use("/users", usersRoute);
routes.use("/login", loginsRoute);
routes.use("/categories", categoryRoute);
routes.use("/realEstate", realEstateRoute);
routes.use("/schedules", scheduleRoute);