import { TCars } from './car.interface';
import { CarModel } from './car.model';

const createCarDB = async (carData: TCars) => {
  const res = await CarModel.create(carData);
  return res;
};

const findCarDB = async () => {
  const res = await CarModel.find();
  return res;
};

const findSingleCarDB = async (carId: string) => {
  const res = await CarModel.findById(carId);
  return res;
};

export const CarServices = {
  createCarDB,
  findCarDB,
  findSingleCarDB,
};
