import FacilityRepository from "../repositoryServices/facilityRepository.js";

class FacilityBusinessService {

          async getFacilityByGuid (facilityGuid: string): Promise<any> {
               const facilityRepository = new FacilityRepository();
               return await facilityRepository.getFacilityByGuid(facilityGuid);
          }
}

export default FacilityBusinessService;