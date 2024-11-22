import { model, Schema } from 'mongoose';
import { TCars } from './car.interface';

const CarCategorySchema = {
  type: String,
  enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
  required: true,
};

// Create the Mongoose schema
const CarSchema = new Schema<TCars>({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  category: CarCategorySchema,
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});



// Create and export the Mongoose model
export const CarModel = model<TCars>('Car', CarSchema);
