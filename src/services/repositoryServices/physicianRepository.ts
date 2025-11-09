import { getMSSQLConnection } from "../../helpers/mssql.js";

class PhysicianRepository {
    // Implementation of PatientsRepository methods
    /**
         * 
         * @param physicianGuid 
         * @returns 
         */
    
        async getPhysicianByGuid(physicianGuid: string): Promise<any> {
            try {
                const pool = await getMSSQLConnection();
                const request = pool.request();
                // Add your SQL query and parameters here
    
                const result = await request.query( `exec [physician].[spGetphysicianByGuid] @physician_guid='${physicianGuid}'`);
    
                return result.recordset;
    
            } catch (error) {
                return Promise.reject(error);
            }
    
        }

}

export default PhysicianRepository;