import { Request, Response } from "express";
import { getScheduleRealEstateService, postScheduleService } from "../services/schedule.service";
import { RealEstate, Schedule } from "../entities";

export const postScheduleController = async (req: Request, res: Response): Promise<Response> => {
    await postScheduleService(req.body, +res.locals.decod.sub);

    return res.status(201).json({message: "Schedule created"});
}



export const getScheduleRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const scheduleRealEstate: RealEstate = await getScheduleRealEstateService(+req.params.id);

    return res.status(200).json(scheduleRealEstate);
}