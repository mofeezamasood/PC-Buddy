import { HydratedDocument } from 'mongoose';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import IStorage from '../types/models/IStorage';
import { Request } from 'express';
import Storage from '../models/storage';
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import Score from '../middlewares/Score';

const StorageController = {
  add: asyncWrapper(async (req: Request) => {
    const { name, type, capacity, readSpeed, writeSpeed, formFactor, price, status } = req.body;
    const score = Score.calculateStorageScore(capacity, readSpeed, writeSpeed, formFactor, price);
    const storage: HydratedDocument<IStorage> = new Storage({
      name,
      type,
      capacity,
      readSpeed,
      writeSpeed,
      formFactor,
      price,
      status,
      score,
    });
    await storage.save();
    return new SuccessResponse('Storage has been added!');
  }),
  update: asyncWrapper(async (req: Request) => {
    const storageId = req.params.id;
    const updateData = req.body;

    const updatedStorage = await Storage.findByIdAndUpdate(storageId, updateData, { new: true });

    if (!updatedStorage) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Storage not found');
    }

    return new SuccessResponse('Storage has been updated!');
  }),
  delete: asyncWrapper(async (req: Request) => {
    const storageId = req.params.id;

    const deletedStorage = await Storage.findByIdAndRemove(storageId);

    if (!deletedStorage) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Storage not found');
    }

    return new SuccessResponse('Storage has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await Storage.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const storageItems = await Storage.find();
    return new SuccessResponse(storageItems);
  }),
};

export default StorageController;
