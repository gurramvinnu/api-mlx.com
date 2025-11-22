import type { insurance } from "../../models/insurance.js";



class InsuranceMapper {
    mapToInsurance(dbRecord: any): insurance {
        return {
            INSURANCE_GUID: dbRecord.insurance_guid,
            INSURANCE_ID: dbRecord.insurance_id,
            NAME: dbRecord.name,
            POLICY_NAME: dbRecord.policy_name,
            CARRIER_CODE: dbRecord.carrier_code,
            PLAN_TYPE: dbRecord.plan_type,
            POLICY_NUMBER: dbRecord.policy_number,
            GROUP_NUMBER: dbRecord.group_number,
            RELATIONSHIP: dbRecord.relationship,
        };
    }
}

export default InsuranceMapper;
