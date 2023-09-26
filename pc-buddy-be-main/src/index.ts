import dbConnection from './config/dbConnection';
import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';
import ErrorHandler from './middlewares/ErrorHandler';

dotenv.config();
const app: Application = express();
const PORT = process.env.BACK_PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', routes);

const startServer = async () => {
  try {
    dbConnection();
    app.listen(PORT, (): void => {
      console.log(`Connected successfully on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
  }
};

startServer();

app.use(ErrorHandler.handle());
ErrorHandler.initializeUnhandledException();

export default app;
