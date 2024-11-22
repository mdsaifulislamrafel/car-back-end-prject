import { TCars } from './car.interface';
import { CarModel } from './car.model';

const createCarDB = async (carData: TCars) => {
  const res = await CarModel.create(carData);
  return res;
};

const findCarDB = async () => {
  const res = await CarModel.find();
  return res;
}

export const CarServices = {
  createCarDB,
  findCarDB,
};
