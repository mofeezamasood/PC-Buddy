import { HydratedDocument } from 'mongoose';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import { Request } from 'express';
import RAM from '../models/ram';
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import IRAM from '../types/models/IRam';
import Score from '../middlewares/Score';

const RAMController = {
  add: asyncWrapper(async (req: Request) => {
    const { name, type, capacity, readSpeed, writeSpeed, latency, ecc, rgb, price, status } = req.body;
    const score = Score.calculateRAMScore(capacity, readSpeed, writeSpeed, latency, ecc, rgb, price, status);
    const ram: HydratedDocument<IRAM> = new RAM({
      name,
      type,
      capacity,
      readSpeed,
      writeSpeed,
      latency,
      ecc,
      rgb,
      price,
      status,
      score,
    });
    await ram.save();
    return new SuccessResponse('RAM has been added!');
  }),
  update: asyncWrapper(async (req: Request) => {
    const ramId = req.params.id;
    const updateData = req.body;

    const updatedRAM = await RAM.findByIdAndUpdate(ramId, updateData, { new: true });

    if (!updatedRAM) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'RAM not found');
    }

    return new SuccessResponse('RAM has been updated!');
  }),
  delete: asyncWrapper(async (req: Request) => {
    const ramId = req.params.id;

    const deletedRAM = await RAM.findByIdAndRemove(ramId);

    if (!deletedRAM) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'RAM not found');
    }

    return new SuccessResponse('RAM has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await RAM.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const RAMs = await RAM.find();
    return new SuccessResponse(RAMs);
  }),
};

export default RAMController;
