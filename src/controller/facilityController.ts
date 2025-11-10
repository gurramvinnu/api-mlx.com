import express, {type Request, type Response } from 'express';
import FacilityBusinessService from "../services/bussinessServices/facilityBusinessService.js";

class FaccilityController {
    async getFacilityByGuid (req: Request, res: Response): Promise<any> {   
        const facilityBusinessService = new FacilityBusinessService();
        const { facility_guid } = req.params;
        if (!facility_guid) {
            return Promise.reject(new Error("facility_guid parameter is required"));
        }
        const result = await facilityBusinessService.getFacilityByGuid(facility_guid);
        return res.json({ result });
    } 

    async getAllfacilities (req: Request, res: Response): Promise<any> {   
        const facilityBusinessService = new FacilityBusinessService();
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10; 
        const result = await facilityBusinessService.getAllfacilities(pageNumber, pageSize);
        return res.json({ result });
    }
}

export default new FaccilityController;