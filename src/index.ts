import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';

import mathRoutes from './routes/mathRoutes.js';
import ordersRoutes from './routes/ordersRoute.js';
import physicianRoutes from './routes/physicianRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import facilityRoutes from './routes/facilityRoutes.js';
import insuranceRoutes from './routes/insuranceRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Incoming Request Body:', req.body);
  next();
});

// Routes
app.use("/", mathRoutes);
app.use("/orders", ordersRoutes);
app.use("/patients", patientRoutes);
app.use("/facilities", facilityRoutes);
app.use("/insurance", insuranceRoutes);
app.use("/physicians", physicianRoutes);

// Dynamic port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
