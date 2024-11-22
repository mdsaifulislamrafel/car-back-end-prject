import express from 'express';
import { CarController } from './car.controlor';
const router = express.Router();
// car post api routes
router.post('/api/cars', CarController.createCar);
// car get all api routes
router.get('/api/cars', CarController.getCar);
// car get single api routes
router.get('/api/cars/:carId', CarController.getSingleCar);
// car update single api routes
router.put('/api/cars/:carId', CarController.updateSingleCar);

export const CarRoutes = router;
