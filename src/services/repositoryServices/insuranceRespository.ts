import { getMSSQLConnection } from "../../helpers/mssql.js";
import type { insurance } from "../../models/insurance.js";
import insuranceMapper from "../../helpers/mapper/insuranceMapper.js";

class insuranceRepository {

    private insuranceMapper: insuranceMapper;
    constructor() {
        this.insuranceMapper = new insuranceMapper();
    }

    async createOrder(orderData: any): Promise<void> {
        const pool = await getMSSQLConnection();
        const request = pool.request();
    }

    async getInsuranceByGuid(insuranceGuid: string): Promise<insurance[]> {
        try {
            const pool = await getMSSQLConnection();
            const request = pool.request();
            const result = await request.query(`
               SELECT [insurance_guid], [name], [policy_number]
               FROM [MLX].[insurance].[insurance] AS o
               WHERE o.insurance_guid = '${insuranceGuid}' AND o.is_deleted = 0
            `);    
            return result.recordset.map((record: any) => this.insuranceMapper.mapToInsurance(record));
        } 
        catch (error) {
            return Promise.reject(error);
        }
    }

    async getAllInsurances(pageNumber: number, pageSize: number): Promise<insurance[]> {
        try {
            const pool = await getMSSQLConnection();
            const request = pool.request();    
            const result = await request.query(`
                EXEC [insurance].[spGetAllInsurance] 
                @PageNumber = ${pageNumber}, 
                @PageSize = ${pageSize};
            `);
            return result.recordset.map((record: any) => this.insuranceMapper.mapToInsurance(record));
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async insuranceDeletedByGuid(insuranceGuid: string): Promise<{ insurance_guid: string, message: string }[]> {
        try {
            const pool = await getMSSQLConnection();
            const request = pool.request();    
            const result = await request.query(`
                UPDATE [MLX].[insurance].[insurance]
                SET is_deleted = 1,
                modified_by = 'sa_user',
                modified_date = GETDATE()
                OUTPUT inserted.insurance_guid, 'Insurance deleted successfully' AS message
                WHERE insurance_guid = '${insuranceGuid}';`
            );
            return result.recordset;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
export default insuranceRepository;