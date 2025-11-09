import express from 'express';
import PatientController from '../controller/patientController.js';

const router = express.Router();

router.get('/getPatientByGuid/:patientGuid', PatientController.getPatientByGuid);

export default router;