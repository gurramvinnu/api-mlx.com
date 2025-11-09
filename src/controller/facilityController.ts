import express, {type Request, type Response } from 'express';
import FacilityBusinessService from "../services/bussinessServices/facilityBusinessService.js";

class FaccilityController {
    async getFacilityByGuid (req: Request, res: Response): Promise<any> {   
        debugger;
        const facilityBusinessService = new FacilityBusinessService();
        const { facility_guid } = req.params;
        if (!facility_guid) {
            return Promise.reject(new Error("facility_guid parameter is required"));
        }
        const result = await facilityBusinessService.getFacilityByGuid(facility_guid);
        return res.json({ result });
    } 
}

export default new FaccilityController;