/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderModel } from './order.model';
import { CarModel } from '../cars/car.model';

export const createOrder = async (orderData: any) => {
  const { email, car, quantity, totalPrice } = orderData;

  const carData = await CarModel.findById(car);

  if (!carData) {
    throw new Error('Car not found.');
  }

  if (carData.quantity < quantity) {
    throw new Error('Insufficient stock.');
  }

  // Reduce inventory
  carData.quantity -= quantity;
  carData.inStock = carData.quantity > 0;

  await carData.save();

  // Create the order
  const order = await OrderModel.create({ email, car, quantity, totalPrice });
  return order;
};

export const calculateRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result[0]?.totalRevenue || 0;
};
