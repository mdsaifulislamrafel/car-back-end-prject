import { Request, Response } from 'express';
import { CarServices } from './car.services';
import CarValidation from './car.validation';

// create a new car request and response
const createCar = async (req: Request, res: Response) => {
  try {
    const cars = req.body;
    // zod validation added for car
    const validationCar = CarValidation.parse(cars)
    const result = await CarServices.createCarDB(validationCar);
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

// get all cars request and response
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

// get single cars request and response
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

// update single cars request and response
const updateSingleCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId;
    const { price, quantity } = req.body;

    const updatedCar = {
      $set: {
        price,
        quantity,
        updatedAt: Date.now(),
      },
    };

    const result = await CarServices.updateSingleCarDB(id, updatedCar);
    res.status(200).json({
      message: 'Car updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update car',
      success: false,
      error,
    });
  }
};

// delete single cars request and response

const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId;
    const result = await CarServices.deleteSingleCarDB(id);
    res.status(200).json({
      message: 'Car deleted successfully',
      status: true,
      data: result || {},
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete car',
      success: false,
      error,
    });
  }
};

export const CarController = {
  createCar,
  getCar,
  getSingleCar,
  updateSingleCar,
  deleteSingleCar,
};
