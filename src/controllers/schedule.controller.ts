import { Request, Response } from "express";
import { postScheduleService } from "../services/schedule.service";

export const postScheduleController = async (req: Request, res: Response): Promise<Response> => {
    await postScheduleService(req.body, +res.locals.decod.sub);

    return res.status(201).json({message: "Schedule created"});
}