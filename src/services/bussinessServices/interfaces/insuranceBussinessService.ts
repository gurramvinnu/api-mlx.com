import type { insurance } from "../../../models/insurance.js";
import insuranceRepository from "../../repositoryServices/insuranceRespository.js";

class InsurancesBussinessService {

  async addOrUpdateInsurance(data: any) {
      const insurancesRepository = new insuranceRepository();
        return await insurancesRepository.addOrUpdateInsurance(data);
    }

   async getInsuranceByGuid(insuranceGuid: string): Promise<insurance[]> {
        const insurancesRepository = new insuranceRepository();
        return await insurancesRepository.getInsuranceByGuid(insuranceGuid);
    }

    
  async getAllInsurances( pagenumber: number,pagesize: number,search:string,SortColumn:string,SortDirection:string ): Promise<{totalCount: number; data: insurance[] }> {
    const insurancesRepository = new insuranceRepository();
    return await insurancesRepository.getAllInsurances(pagenumber, pagesize,search,SortColumn,SortDirection);
}

   async insuraneDeletedByGuid(insuranceGuid: string): Promise<{ insurance_guid: string; message: string; }[]> {
        const insurancesRepository = new insuranceRepository();
        return await insurancesRepository.insuranceDeletedByGuid(insuranceGuid);
   }
}
export default new InsurancesBussinessService;