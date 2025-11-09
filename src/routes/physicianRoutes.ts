import express from 'express';
import PhysicianController from '../controller/physicianController.js';

const router = express.Router();

router.get('/getPhysicianByGuid/:physicianGuid', PhysicianController.getPhysicianByGuid);

export default router;