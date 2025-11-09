import PatientsRepository from "../repositoryServices/patientsRepository.js";

class patientBusinessService {
    // Business logic methods for patient services will go here

            async getPatientByGuid(patientGuid: string): Promise<any> {
                // Business logic can be added here if needed

                const patientsRepository = new PatientsRepository();
                return await patientsRepository.getPatientByGuid(patientGuid);
            }

}

export default patientBusinessService;