import Express,{ type NextFunction, type Request, type Response }  from "express";
import insuranceBussinessService from "../services/bussinessServices/interfaces/insuranceBussinessService.js";

class InsuranceController {

async addInsuranceandUpdateByGuid(req, res, next) {
    try {
        let guid = req.body.insuranceGuid || req.body.insurance_guid;
        guid =
            guid &&
            guid !== "null" &&
            guid !== "undefined" &&
            guid !== ""
                ? guid
                : null;
        const payload = {
            insurance_guid: guid,
            name: req.body.NAME,
            policy_name: req.body.POLICY_NAME,
            carrier_code: req.body.CARRIER_CODE,
            plan_type: req.body.PLAN_TYPE,
            policy_number: req.body.POLICY_NUMBER,
            group_number: req.body.GROUP_NUMBER,
            relationship: req.body.RELATIONSHIP,
            created_by: req.body.created_by || "sa_user",
        };
     const result = await insuranceBussinessService.addOrUpdateInsurance(payload);
       return res.json({
            success: true,
            insurance_guid: result.insurance_guid,
            message: result.message
        });

    } catch (error) {
        next(error);
    }
}


 async getinsuranceByGuid(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const service = insuranceBussinessService; 
        const { insuranceGuid } = req.params;
        if (!insuranceGuid) {
            return res.status(400).json({ error: "insuranceGuid parameter is required" });
        }
        const result = await service.getInsuranceByGuid(insuranceGuid);
        return res.json({ result });
    } catch (error) {
        return next(error);
    }
 
   }


async getAllInsurances(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const service = insuranceBussinessService;
        const pageNumber: number = Number(req.params.pagenumber);
        const pageSize: number = Number(req.params.pagesize);
        const search: string = req.body.Search as string || '';
        const SortColumn: string = req.body.SortColumn as string || 'created_dt';
        const SortDirection: string = req.body.SortDirection as string || 'DESC';   
        const result = await service.getAllInsurances(pageNumber, pageSize,search,SortColumn,SortDirection);
        return res.json({ result });
    } catch (error) {
        return next(error);
    }
  }

  async insuraneDeletedByGuid(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const service = insuranceBussinessService;
        const { insuranceGuid } = req.params;
        if (!insuranceGuid) {
            return res.status(400).json({ error: "insuranceGuid parameter is required" });
        }
        const result = await service.insuraneDeletedByGuid(insuranceGuid);
        return res.json({ result });
    } catch (error) {
        return next(error);
    }

}
}

export default new InsuranceController();