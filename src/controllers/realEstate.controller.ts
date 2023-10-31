import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { getRealEStateService, postRealEStateService } from "../services/realEstate.service";

export const postRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const newRealEstate: RealEstate = await postRealEStateService(req.body);

    return res.status(201).json(newRealEstate);
}

export const getRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const RealEstates: RealEstate[] = await getRealEStateService();

    return res.status(200).json(RealEstates);
}
