import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import { Request } from 'express';
import CpuCooler from '../models/cpuCooler';
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import ICpuCooler from '../types/models/ICpuCooler';
import { HydratedDocument } from 'mongoose';
import Score from '../middlewares/Score';

const CpuController = {
  add: asyncWrapper(async (req: Request) => {
    const { name, type, numberOfFans, minFanSpeed, maxFanSpeed, size, rgb, price, status } = req.body;
    const score = Score.calculateCPUCoolerScore(type, numberOfFans, minFanSpeed, maxFanSpeed, size, rgb, price);
    const cpuCooler: HydratedDocument<ICpuCooler> = new CpuCooler({
      name,
      type,
      numberOfFans,
      minFanSpeed,
      maxFanSpeed,
      size,
      rgb,
      price,
      status,
      score,
    });

    await cpuCooler.save();
    return new SuccessResponse('CPU Cooler has been added!');
  }),
  update: asyncWrapper(async (req: Request) => {
    const cpuCoolerId = req.params.id;
    const updateData = req.body;

    const updatedCpuCooler = await CpuCooler.findByIdAndUpdate(cpuCoolerId, updateData, { new: true });

    if (!updatedCpuCooler) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'CPU Cooler not found');
    }

    return new SuccessResponse('CPU Cooler has been updated!');
  }),
  delete: asyncWrapper(async (req: Request) => {
    const cpuCoolerId = req.params.id;

    const deletedCpuCooler = await CpuCooler.findByIdAndRemove(cpuCoolerId);

    if (!deletedCpuCooler) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'CPU Cooler not found');
    }

    return new SuccessResponse('CPU Cooler has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await CpuCooler.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const components = await CpuCooler.find();
    return new SuccessResponse(components);
  }),
};

export default CpuController;
