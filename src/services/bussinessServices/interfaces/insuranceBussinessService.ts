import insuranceRepository from "../../repositoryServices/insuranceRespository.js";

class InsurancesBussinessService {

   async getInsuranceByGuid(insuranceGuid: string): Promise<any> {
        const insurancesRepository = new insuranceRepository();
        return await insurancesRepository.getInsuranceByGuid(insuranceGuid);
    }

    
   async getAllInsurances(pagenumber: number, pagesize: number): Promise<any> {
         const insurancesRepository = new insuranceRepository();
        return await insurancesRepository.getAllInsurances(pagenumber,pagesize);
   }
}
export default new InsurancesBussinessService;