import { Address, Category, RealEstate } from "../entities";
import AppError from "../errors/App.error";
import { RealEstateCreate } from "../interfaces/realEstate.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

export const postRealEStateService = async (data: RealEstateCreate): Promise<RealEstate> => {
    const category: Category | null = await categoryRepo.findOneBy({ id: data.categoryId})
  
    if(!category) throw new AppError('Category not found', 404)
  
    const address: Address = await addressRepo.save(data.address);
    
    const realEstate: RealEstate = await realEstateRepo.save({...data, category});
  
    return realEstate;
}



export const getRealEStateService = async (): Promise<RealEstate[]> => {
    const realEstates: RealEstate[] = await realEstateRepo.find({relations:{ address: true}})

    return realEstates;
}
