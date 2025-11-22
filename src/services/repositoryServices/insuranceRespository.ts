import { getMSSQLConnection } from "../../helpers/mssql.js";
import type { insurance } from "../../models/insurance.js";
import insuranceMapper from "../../helpers/mapper/insuranceMapper.js";

class insuranceRepository {

    private insuranceMapper: insuranceMapper;
    constructor() {
        this.insuranceMapper = new insuranceMapper();
    }
    async addOrUpdateInsurance(data: any): Promise<any> {
        const pool = await getMSSQLConnection();
        const request = pool.request();

        request.input("insurance_guid", data.insurance_guid);
        request.input("name", data.name);
        request.input("policy_name", data.policy_name);
        request.input("carrier_code", data.carrier_code);
        request.input("plan_type", data.plan_type);
        request.input("policy_number", data.policy_number);
        request.input("group_number", data.group_number);
        request.input("relationship", data.relationship);
        request.input("created_by", data.created_by);

        const result = await request.execute("insurance.sp_AddOrUpdateInsurance");

        return result.recordset[0];
    }

    async getInsuranceByGuid(insuranceGuid: string): Promise<insurance[]> {
        try {
            const pool = await getMSSQLConnection();
            const request = pool.request();
            const result = await request.query(`
              SELECT [insurance_guid],
                     [insurance_id], 
                     [name], 
                     [policy_number],
                     [carrier_code], 
                     [plan_type],
                     [policy_name],  
                     [group_number],
                     [relationship]
               FROM [MLX].[insurance].[insurance] AS o
               WHERE o.insurance_guid = '${insuranceGuid}' AND o.is_deleted = 0
            `);    
            return result.recordset.map((record: any) => this.insuranceMapper.mapToInsurance(record));
        } 
        catch (error) {
            return Promise.reject(error);
        }
    }

async getAllInsurances(
    pageNumber: number,
    pageSize: number,
    Search: string,
    SortColumn: string,
    SortDirection: string
): Promise<{ totalCount: number; data: insurance[] }> {
    try {
        const pool = await getMSSQLConnection();
        const request = pool.request();

        const result = await request.query(`
            EXEC [insurance].[spGetAllInsurance] 
                @PageNumber = ${pageNumber}, 
                @PageSize = ${pageSize},
                @Search = '${Search ?? ""}',
                @SortColumn = '${SortColumn ?? "insurance_id"}',
                @SortDirection = '${SortDirection ?? "ASC"}';
        `);
        const totalCount = result.recordsets[0][0].TotalCount;
        const dataRecords = result.recordsets[1];
        const data = dataRecords.map((rec: any) =>
            this.insuranceMapper.mapToInsurance(rec)
        );
      return { totalCount, data };
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
                modified_dt = GETDATE()
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