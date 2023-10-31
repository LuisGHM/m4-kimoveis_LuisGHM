import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { postRealEStateService } from "../services/realEstate.service";

export const postRealEStateController = async (req: Request, res: Response): Promise<Response> => {
    const newRealEstate: RealEstate = await postRealEStateService(req.body);

    return res.status(201).json(newRealEstate);
}