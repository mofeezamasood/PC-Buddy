import dbConnection from './config/dbConnection';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';
import ErrorHandler from './middlewares/ErrorHandler';
import { populateXLXSFiles } from './config/populateData';
import Score from './middlewares/Score';
import createCompatibleBuilds from './utils/getBuild';

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
    // populateXLXSFiles();
    // console.log(Score.calculatePsuScore(1200, '80+ gold', 5, 'semi-modular', 20000));
    // console.log(await createCompatibleBuilds(200000));
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
