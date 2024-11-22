import { Request, Response } from 'express';
import { CarServices } from './car.services';

const createCar = async (req: Request, res: Response) => {
  try {
    const cars = req.body;
    const result = await CarServices.createCarDB(cars);
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create car',
      success: false,
      error,
    });
  }
};

const getCar = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.findCarDB();
    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get car',
      success: false,
      error,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId;
    const result = await CarServices.findSingleCarDB(id);
    res.status(200).json({
      message: 'Car retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get car',
      success: false,
      error,
    });
  }
};

export const CarController = {
  createCar,
  getCar,
  getSingleCar,
};
