import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/cars/car.routes';
const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/', CarRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
