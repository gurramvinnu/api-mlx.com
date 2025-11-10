import PhysicianRepository from "../repositoryServices/physicianRepository.js";

class PhysicianBusinessService {
            async getPhysicianByGuid(physicianGuid: string): Promise<any> {
                const physicianRepository = new PhysicianRepository();
                return await physicianRepository.getPhysicianByGuid(physicianGuid);
            }

            async getAllphysicians(pageNumber: Number, pageSize: Number): Promise<any> {
                const physicianRepository = new PhysicianRepository();
                return await physicianRepository.getAllphysicians(pageNumber, pageSize);
            }
}

export default PhysicianBusinessService;