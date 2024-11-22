import express from 'express';
import { CarController } from './car.controlor';
const router = express.Router();

router.post('/api/cars', CarController.createCar);
router.get('/api/cars', CarController.getCar);

export const CarRoutes = router;
