import { getMSSQLConnection } from "../../helpers/mssql.js";
import type { Patient } from "../../models/paitent.js";
import PatientMapper from "../../helpers/mapper/patientMapper.js";

class PatientsRepository {
    private patientMapper: PatientMapper;

    constructor() {
        this.patientMapper = new PatientMapper();
    }

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

        async getAllPatients(pageNumber: number,pageSize:number): Promise<Patient[]> {
            try {
                const pool = await getMSSQLConnection();
                const request = pool.request();
                // Add your SQL query and parameters here
    
                const result = await request.query( `exec [patient].[spGetAllPatients] @PageNumber=${pageNumber},@PageSize=${pageSize}`);
    
                return result.recordset.map((record: any) => this.patientMapper.mapToPatient(record));
    
            } catch (error) {
                return Promise.reject(error);
            }
    
        }

}

export default PatientsRepository;