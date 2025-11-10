import dotenv from 'dotenv';
import express from 'express';
import mathRoutes from './src/routes/mathRoutes.js';
import ordersRoutes from './src/routes/ordersRoute.js';
import patientRoutes from './src/routes/patientRoutes.js';
import physicianRoutes from './src/routes/physicianRoutes.js';
import facilityRoutes from './src/routes/facilityRoutes.js';
import insuranceRoutes from './src/routes/insuranceRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());


app.use("/",mathRoutes);
app.use("/orders",ordersRoutes);
app.use("/patients", patientRoutes);
app.use("/facilities", facilityRoutes); 
app.use("/insurance",insuranceRoutes) 
app.use("/physicians", physicianRoutes);
;  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
