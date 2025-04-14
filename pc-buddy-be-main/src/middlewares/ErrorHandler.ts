import { Request, Response } from 'express';
import { ApiError } from '../utils/apiError';

export default class ErrorHandler {
  static handle = () => {
    return async (err: ApiError, req: Request, res: Response) => {
      const statusCode = err.statusCode || 500;
      console.log('error occurred: ', err.toString(), statusCode);
      res.status(statusCode).send({
        success: false,
        message: err.message,
        rawErrors: err.rawErrors ?? [],
        stack: err.stack,
      });
    };
  };

  static initializeUnhandledException = () => {
    process.on('unhandledRejection', (reason: Error) => {
      console.log(reason.name, reason.message);
      console.log('UNHANDLED REJECTION! 💥 Shutting down...');
      throw reason;
    });

    process.on('uncaughtException', (err: Error) => {
      console.log(err.name, err.message);
      console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
      process.exit(1);
    });
  };
}
