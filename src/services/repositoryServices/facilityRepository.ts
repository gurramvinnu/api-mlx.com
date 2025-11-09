import { getMSSQLConnection } from "../../helpers/mssql.js";


class FacilityRepository    {   
     
    // Implementation of FacilityRepository methods
    /**
         * 
         * @param facilityGuid 
         * @returns 
         */
    
        async getFacilityByGuid (facilityGuid: string): Promise<any> {
            try {
                const pool = await getMSSQLConnection();
                const request = pool.request();
                
    
                const result = await request.query(  `exec [facility].[spGetFacilityByGuid] @facility_guid='${facilityGuid}'`);
    
                return result.recordset;
    
            } catch (error) {
                return Promise.reject(error);
            }  
        }
}

export default FacilityRepository;