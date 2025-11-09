import express, { type NextFunction, type Request, type Response } from 'express';
import patientBusinessService from '../services/bussinessServices/patientBusinessService.js';



class PatientController {
    // Method to get patient details
     async getPatientByGuid (req: Request, res: Response, next: NextFunction): Promise<any> {   
        debugger;
        const patientServiceInstance = new patientBusinessService();
        const { patientGuid } = req.params;
        if (!patientGuid) {
            return Promise.reject(new Error("patientGuid parameter is required"));
        }   
        const result = await patientServiceInstance.getPatientByGuid(patientGuid);
        return res.json({ result });
    }
}
export default new PatientController();