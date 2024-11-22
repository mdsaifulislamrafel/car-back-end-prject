import { UpdateQuery } from 'mongoose';
import { TCars } from './car.interface';
import { CarModel } from './car.model';

// create a new car database
const createCarDB = async (carData: TCars) => {
  const res = await CarModel.create(carData);
  return res;
};

// find all cars database
const findCarDB = async () => {
  const res = await CarModel.find();
  return res;
};

// find single car database
const findSingleCarDB = async (carId: string) => {
  const res = await CarModel.findById(carId);
  return res;
};

// update single car database
const updateSingleCarDB = async (id: string, updateData: UpdateQuery<TCars>) => {
  const res = await CarModel.findByIdAndUpdate(id, updateData, { new: true });
  return res;
};

// delete single car database

const deleteSingleCarDB = async (carId: string) => {
  const res = await CarModel.findByIdAndDelete(carId);
  return res;
};




export const CarServices = {
  createCarDB,
  findCarDB,
  findSingleCarDB,
  updateSingleCarDB,
  deleteSingleCarDB,
};
