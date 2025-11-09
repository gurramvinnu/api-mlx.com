import PhysicianRepository from "../repositoryServices/physicianRepository.js";

class PhysicianBusinessService {
            async getPhysicianByGuid(physicianGuid: string): Promise<any> {
                const physicianRepository = new PhysicianRepository();
                return await physicianRepository.getPhysicianByGuid(physicianGuid);
            }
}

export default PhysicianBusinessService;