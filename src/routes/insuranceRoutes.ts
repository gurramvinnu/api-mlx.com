import Express from "express";
import insuranceController from "../controller/insuranceController.js";


const insuranceRoutes = Express.Router();

insuranceRoutes.get('/getinsuranceByGuid/:orderGuid', insuranceController.getinsuranceByGuid);
insuranceRoutes.get('/getAllInsurances/:pagenumber/:pagesize', insuranceController.getAllInsurances);

export default insuranceRoutes;