import Express,{ type NextFunction, type Request, type Response }  from "express";
import insuranceBussinessService from "../services/bussinessServices/interfaces/insuranceBussinessService.js";

class InsuranceController {

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
        const result = await service.getAllInsurances(pageNumber, pageSize);
        return res.json({ result });
    } catch (error) {
        return next(error);
    }
  }

}


export default new InsuranceController();