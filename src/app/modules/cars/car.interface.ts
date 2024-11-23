export type TCarCategory = 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';

export interface TCars {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: TCarCategory;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt?: Date | undefined;
}
