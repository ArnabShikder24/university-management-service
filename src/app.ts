import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import validateRequest from './app/middlewares/validateRequest';
import { UserValidation } from './app/modules/user/user.validation';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Route
app.use(
  '/api/v1/users',
  validateRequest(UserValidation.createUserZodScrema),
  UserRoutes
);

// Global error handle
app.use(globalErrorHandler);

export default app;
