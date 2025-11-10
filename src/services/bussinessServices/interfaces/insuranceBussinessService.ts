import insuranceRepository from "../../repositoryServices/insuranceRespository.js";

class InsurancesBussinessService {

   async getInsuranceByGuid(insuranceGuid: string): Promise<any> {

     

        const insurancesRepository = new insuranceRepository();
        return await insurancesRepository.getInsuranceByGuid(insuranceGuid);
    }
}
export default new InsurancesBussinessService;