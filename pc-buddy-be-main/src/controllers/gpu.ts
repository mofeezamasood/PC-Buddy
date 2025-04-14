import { HydratedDocument } from 'mongoose';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import { Request } from 'express';
import GPU from '../models/gpu';
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import IGPU from '../types/models/IGpu';
import Score from '../middlewares/Score';

const GPUController = {
  add: asyncWrapper(async (req: Request) => {
    const {
      name,
      type,
      busInterface,
      coreClock,
      memoryType,
      memoryCapacity,
      directX,
      openGL,
      tdp,
      numberOfPorts,
      price,
      status,
    } = req.body;
    const score = Score.calculateGPUScore(coreClock, memoryCapacity, directX, openGL, tdp, numberOfPorts);
    const gpu: HydratedDocument<IGPU> = new GPU({
      name,
      type,
      busInterface,
      coreClock,
      memoryType,
      memoryCapacity,
      directX,
      openGL,
      tdp,
      numberOfPorts,
      price,
      status,
      score,
    });
    await gpu.save();
    return new SuccessResponse('GPU has been added!');
  }),
  update: asyncWrapper(async (req: Request) => {
    const gpuId = req.params.id;
    const updateData = req.body;

    const updatedGPU = await GPU.findByIdAndUpdate(gpuId, updateData, { new: true });

    if (!updatedGPU) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'GPU not found');
    }

    return new SuccessResponse('GPU has been updated!');
  }),
  delete: asyncWrapper(async (req: Request) => {
    const gpuId = req.params.id;

    const deletedGPU = await GPU.findByIdAndRemove(gpuId);

    if (!deletedGPU) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'GPU not found');
    }

    return new SuccessResponse('GPU has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await GPU.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const GPUs = await GPU.find();
    return new SuccessResponse(GPUs);
  }),
};

export default GPUController;
