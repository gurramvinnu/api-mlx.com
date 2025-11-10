import express from 'express';
import FaccilityController from '../controller/facilityController.js';

const router = express.Router();

router.get('/getFacilityByGuid/:facility_guid', FaccilityController.getFacilityByGuid);
router.get('/getAllfacilities/:pageNumber/:pageSize', FaccilityController.getAllfacilities);


export default router;