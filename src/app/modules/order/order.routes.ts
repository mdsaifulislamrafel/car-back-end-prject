import express from 'express';
import { orderCar, getRevenue } from './order.controler';

const router = express.Router();

router.post('/api/orders', orderCar);
router.get('/api/orders/revenue', getRevenue);

export const OrderRouter = router;
