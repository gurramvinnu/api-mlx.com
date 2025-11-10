import express from 'express';
import PhysicianController from '../controller/physicianController.js';

const router = express.Router();

router.get('/getPhysicianByGuid/:physicianGuid', PhysicianController.getPhysicianByGuid);
router.get('/getAllphysicians/:pageNumber/:pageSize', PhysicianController.getAllphysicians);

export default router;