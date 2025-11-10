import express, { type NextFunction, type Request, type Response } from 'express';
import patientBusinessService from '../services/bussinessServices/patientBusinessService.js';



class PatientController {
    // Method to get patient details
     async getPatientByGuid (req: Request, res: Response, next: NextFunction): Promise<any> {   
    
        const patientServiceInstance = new patientBusinessService();
        const { patientGuid } = req.params;
        if (!patientGuid) {
            return Promise.reject(new Error("patientGuid parameter is required"));
        }   
        const result = await patientServiceInstance.getPatientByGuid(patientGuid);
        return res.json({ result });
    }

    async getAllPatients (req: Request, res: Response, next: NextFunction): Promise<any> {   
      
        const patientServiceInstance = new patientBusinessService();
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;  
        const result = await patientServiceInstance.getAllPatients(pageNumber, pageSize);
        return res.json({ result });
    }
}
export default new PatientController();