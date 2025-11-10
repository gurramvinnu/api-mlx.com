import { getMSSQLConnection } from "../../helpers/mssql.js";

class insuranceRepository {
    async createOrder(orderData: any): Promise<void> {
        const pool = await getMSSQLConnection();
        const request = pool.request();

    }

    async getInsuranceByGuid(insuranceGuid: string): Promise<any> {
        try {
            const pool = await getMSSQLConnection();
            const request = pool.request();
            const result = await request.query(`SELECT [guid] ,[insurance_code],[date_of_service] FROM [MLX].[insurance].[insurance] as o where o.guid='${insuranceGuid}' and is_deleted=0 `);
            return result.recordset;

        } catch (error) {
            return Promise.reject(error);
        }
    }
}
export default insuranceRepository;
    