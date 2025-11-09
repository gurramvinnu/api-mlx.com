import { getMSSQLConnection } from "../../helpers/mssql.js";

class PatientsRepository {
    // Implementation of PatientsRepository methods
    /**
         * 
         * @param orderGuid 
         * @returns 
         */
    
        async getPatientByGuid(patientGuid: string): Promise<any> {
            try {
                const pool = await getMSSQLConnection();
                const request = pool.request();
                // Add your SQL query and parameters here
    
                const result = await request.query( `exec [patient].[spGetPatientByGuid] @patient_guid='${patientGuid}'`);
    
                return result.recordset;
    
            } catch (error) {
                return Promise.reject(error);
            }
    
        }

}

export default PatientsRepository;