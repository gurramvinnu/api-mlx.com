import dotenv from 'dotenv';
import express from 'express';
import mathRoutes from './src/routes/mathRoutes.js';
import ordersRoutes from './src/routes/ordersRoute.js';
import patientRoutes from './src/routes/patientRoutes.js';

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());
app.use("/",mathRoutes);
app.use("/orders",ordersRoutes);

app.use("/patients", patientRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
