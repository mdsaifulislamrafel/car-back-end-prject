import { Schema } from 'mongoose';
import { TCar } from './car.interface';

const CarSchema = new Schema<TCar>({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    required: true,
    enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
});

export const CarSchemaModel = {
  CarSchema,
};
