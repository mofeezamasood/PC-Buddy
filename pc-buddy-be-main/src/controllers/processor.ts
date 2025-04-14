import { HydratedDocument } from 'mongoose';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import { Request } from 'express';
import Processor from '../models/processor';
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import Score from '../middlewares/Score';
import IProcessor from '../types/models/IProcessor';

const ProcessorController = {
  add: asyncWrapper(async (req: Request) => {
    const {
      name,
      type,
      cores,
      threads,
      baseClock,
      boostClock,
      cache,
      tdp,
      architecture,
      socket,
      integratedGraphics,
      overClockable,
      price,
      status,
    } = req.body;
    const score = Score.calculateProcessorScore(
      cores,
      threads,
      baseClock,
      boostClock,
      cache,
      tdp,
      architecture,
      integratedGraphics,
      overClockable,
    );
    const processor: HydratedDocument<IProcessor> = new Processor({
      name,
      type,
      cores,
      threads,
      baseClock,
      boostClock,
      cache,
      tdp,
      architecture,
      socket,
      integratedGraphics,
      overClockable,
      price,
      status,
      score,
    });
    await processor.save();
    return new SuccessResponse('Processor has been added!');
  }),
  update: asyncWrapper(async (req: Request) => {
    const processorId = req.params.id;
    const updateData = req.body;

    const updatedProcessor = await Processor.findByIdAndUpdate(processorId, updateData, { new: true });

    if (!updatedProcessor) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Processor not found');
    }

    return new SuccessResponse('Processor has been updated!');
  }),
  delete: asyncWrapper(async (req: Request) => {
    const processorId = req.params.id;

    const deletedProcessor = await Processor.findByIdAndRemove(processorId);

    if (!deletedProcessor) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Processor not found');
    }

    return new SuccessResponse('Processor has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await Processor.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const processors = await Processor.find();
    return new SuccessResponse(processors);
  }),
};

export default ProcessorController;
