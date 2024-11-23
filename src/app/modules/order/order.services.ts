/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderModel } from './order.model';
import { CarModel } from '../cars/car.model';
import validationOrder from './order.validation';

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
  // গাড়ির স্টক (quantity) চাহিদা অনুযায়ী হ্রাস করে।
  carData.quantity -= quantity;
  // চেক করে যদি স্টক 0 এর চেয়ে বেশি থাকে, তাহলে inStock প্রপার্টিকে true করে, অন্যথায় false।
  carData.inStock = carData.quantity > 0;

  await carData.save();

  // zod validation added for order
  const orderValidation = validationOrder.parse({email, car, quantity, totalPrice})
  // Create the order
  const order = await OrderModel.create(orderValidation);
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
