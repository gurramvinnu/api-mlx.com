import express, {type Request, type Response } from 'express';
import PhysicianBusinessService from '../services/bussinessServices/physicianBusinessService.js';



class PhysicianController {
     async getPhysicianByGuid (req: Request, res: Response): Promise<any> {   
      
        const physicianBusinessService = new PhysicianBusinessService();
        const { physicianGuid } = req.params;
        if (!physicianGuid) {
            return Promise.reject(new Error("physicianGuid parameter is required"));
        }   
        const result = await physicianBusinessService.getPhysicianByGuid(physicianGuid);
        return res.json({ result });
    }
}
export default new PhysicianController;