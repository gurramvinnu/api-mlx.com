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
        
        async getAllfacilities (pageNumber: number, PageSize: number){
            try{
            const pool = await getMSSQLConnection();
            const request = pool.request();

            const result = await request.query(`exec [facility].[spGetAllfacilities] @PageNumber='${pageNumber}',@PageSize='${PageSize}'`);
            return result.recordset;
            } catch (error){
                return Promise.reject(error);
            }
        }
}

export default FacilityRepository;