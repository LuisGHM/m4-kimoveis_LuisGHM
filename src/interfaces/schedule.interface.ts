import { z } from "zod";
import { scheduleCreateSchema } from "../schemas/schedule.schema";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;

export type ScheduleRepo = Repository<Schedule>