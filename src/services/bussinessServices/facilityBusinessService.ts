import FacilityRepository from "../repositoryServices/facilityRepository.js";

class FacilityBusinessService {

          async getFacilityByGuid (facilityGuid: string): Promise<any> {
               const facilityRepository = new FacilityRepository();
               return await facilityRepository.getFacilityByGuid(facilityGuid);
          }

          async getAllfacilities (pageNumber: number, PageSize: number){
               const facilityRepository = new FacilityRepository();
               return await facilityRepository.getAllfacilities(pageNumber, PageSize); 
          }
}

export default FacilityBusinessService;