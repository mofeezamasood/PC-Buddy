import { SuccessResponse } from '../utils/SuccessResponse';
import { asyncWrapper } from '../utils/asyncWrapper';
import GPU from '../models/gpu';
import cpuCooler from '../models/cpuCooler';
import Storage from '../models/storage';
import Ram from '../models/ram';
import PSU from '../models/psu';
import Processor from '../models/processor';
import Motherboard from '../models/motherboard';
import { Request } from 'express';
import createCompatibleBuilds from '../utils/getBuild';

const ComponentsController = {
  getAll: asyncWrapper(async () => {
    const gpus = await GPU.find();
    const motherboards = await Motherboard.find();
    const processors = await Processor.find();
    const psus = await PSU.find();
    const rams = await Ram.find();
    const storages = await Storage.find();
    const cpuCoolers = await cpuCooler.find();

    return new SuccessResponse({ gpus, motherboards, processors, psus, storages, rams, cpuCoolers });
  }),

  getBuild: asyncWrapper(async (req: Request) => {
    const budget = req.query.budget;
    const builds = await createCompatibleBuilds(parseInt(budget as string));
    return new SuccessResponse(builds);
  }),
};

export default ComponentsController;
