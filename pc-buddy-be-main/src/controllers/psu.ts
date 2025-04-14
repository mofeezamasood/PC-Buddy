import { HydratedDocument } from 'mongoose';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import { Request } from 'express';
import PSU from '../models/psu';
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import IPSU from '../types/models/IPsu';
import Score from '../middlewares/Score';

const PSUController = {
  add: asyncWrapper(async (req: Request) => {
    const { name, powerCapacity, efficiencyRating, connectors, modularity, price, status } = req.body;
    const score = Score.calculatePSUScore(powerCapacity, efficiencyRating, connectors, modularity, price);
    const psu: HydratedDocument<IPSU> = new PSU({
      name,
      powerCapacity,
      efficiencyRating,
      connectors,
      modularity,
      price,
      status,
      score,
    });

    await psu.save();
    return new SuccessResponse('PSU has been added!');
  }),
  update: asyncWrapper(async (req: Request) => {
    const psuId = req.params.id;
    const updateData = req.body;

    const updatedPSU = await PSU.findByIdAndUpdate(psuId, updateData, { new: true });

    if (!updatedPSU) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'PSU not found');
    }

    return new SuccessResponse('PSU has been updated!');
  }),
  delete: asyncWrapper(async (req: Request) => {
    const psuId = req.params.id;

    const deletedPSU = await PSU.findByIdAndRemove(psuId);

    if (!deletedPSU) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'PSU not found');
    }

    return new SuccessResponse('PSU has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await PSU.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const PSUs = await PSU.find();
    return new SuccessResponse(PSUs);
  }),
};

export default PSUController;
