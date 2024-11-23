import { z } from 'zod';

const CarCategoryEnum = z.enum([
  'Sedan',
  'SUV',
  'Truck',
  'Coupe',
  'Convertible',
]);

const CarValidation = z.object({
  brand: z.string().min(1, { message: 'Brand is required' }),
  model: z.string().min(1, { message: 'Model is required' }),
  year: z.number().int().gte(1886, { message: 'Year must be 1886 or later' }),
  price: z.number().positive({ message: 'Price must be greater than 0' }),
  category: CarCategoryEnum,
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z
    .number()
    .int()
    .nonnegative({ message: 'Quantity must be 0 or greater' }),
  inStock: z.boolean(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional(),
});

export default CarValidation;
