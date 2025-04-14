import { HydratedDocument } from 'mongoose';
import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import IComponent from '../types/models/IMotherboard'; // Update the import path as needed
import { Request } from 'express';
import Motherboard from '../models/motherboard'; // Update the import path as needed
import { ApiError } from '../utils/apiError';
import { StatusCodes } from 'http-status-codes';
import Score from '../middlewares/Score';

const MotherboardController = {
  add: asyncWrapper(async (req: Request) => {
    const {
      name,
      socket,
      formFactor,
      chipset,
      ramSlots,
      ramType,
      storageInterfaces,
      audioChipset,
      wifi,
      bluetooth,
      price,
      status,
    } = req.body;
    const score = Score.calculateMotherboardScore(ramSlots, storageInterfaces, wifi, bluetooth, price);
    const motherboard: HydratedDocument<IComponent> = new Motherboard({
      name,
      socket,
      formFactor,
      chipset,
      ramSlots,
      ramType,
      storageInterfaces,
      audioChipset,
      wifi,
      bluetooth,
      price,
      status,
      score,
    });
    await motherboard.save();
    return new SuccessResponse('Motherboard has been added!');
  }),

  update: asyncWrapper(async (req: Request) => {
    const motherboardId = req.params.id;
    const updateData = req.body;

    const updatedMotherboard = await Motherboard.findByIdAndUpdate(motherboardId, updateData, { new: true });

    if (!updatedMotherboard) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Motherboard not found');
    }

    return new SuccessResponse('Motherboard has been updated!');
  }),

  delete: asyncWrapper(async (req: Request) => {
    const motherboardId = req.params.id;

    const deletedMotherboard = await Motherboard.findByIdAndRemove(motherboardId);

    if (!deletedMotherboard) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Motherboard not found');
    }

    return new SuccessResponse('Motherboard has been deleted!');
  }),
  get: asyncWrapper(async (req: Request) => {
    const id = req.params.id;
    const component = await Motherboard.findById(id).select(['-createdAt', '-updatedAt', '-__v']);
    return new SuccessResponse(component);
  }),
  getAll: asyncWrapper(async () => {
    const motherboards = await Motherboard.find();
    return new SuccessResponse(motherboards);
  }),
};

export default MotherboardController;
