import { RealEstate, Schedule, User } from "../entities";
import AppError from "../errors/App.error";
import { ScheduleCreate } from "../interfaces/schedule.interface";
import { UserRead } from "../interfaces/users.interface";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";

export const postScheduleService = async (data: ScheduleCreate, userId: number): Promise<Schedule> => {
    const realEstate: RealEstate | null = await realEstateRepo.findOne({where: {id: data.realEstateId}}); 
    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    }
    const user: User | null = await userRepo.findOne({where: {id: userId}});

    const newSchedule = await scheduleRepo.save({...data, realEstate: realEstate!, user: user!});

    return newSchedule;
}

export const getScheduleRealEstateService = async (realEstateId: number): Promise<RealEstate> => {
    const scheduleRealEstate: RealEstate | null = await realEstateRepo.findOne({where: {id: realEstateId}, relations: {address: true, category: true, schedules: {user: true}}})

    return scheduleRealEstate!;
} 