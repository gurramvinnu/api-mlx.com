import express from 'express';
import PatientController from '../controller/patientController.js';

const router = express.Router();

router.get('/getPatientByGuid/:patientGuid', PatientController.getPatientByGuid);
router.get('/getAllPatients/:pageNumber/:pageSize', PatientController.getAllPatients);
export default router;