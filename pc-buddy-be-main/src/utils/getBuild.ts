import CPUCooler from '../models/cpuCooler';
import GPU from '../models/gpu';
import Motherboard from '../models/motherboard';
import Processor from '../models/processor';
import PSU from '../models/psu';
import RAM from '../models/ram';
import Storage from '../models/storage';
import ICpuCooler from '../types/models/ICpuCooler';
import IGPU from '../types/models/IGpu';
import IMotherboard from '../types/models/IMotherboard';
import IProcessor from '../types/models/IProcessor';
import IPSU from '../types/models/IPsu';
import IRAM from '../types/models/IRam';
import IStorage from '../types/models/IStorage';

const aggregateProcessors = (budget: number) =>
  Processor.aggregate([{ $match: { price: { $lte: budget } } }]);
     //{ $sort: { price: 1 } }, { $limit: 5 }]);

const aggregateCPUCoolers = (budget: number) =>
  CPUCooler.aggregate([{ $match: { price: { $lte: budget } } }, { $sort: { price: 1 } }, { $limit: 5 }]);

const aggregateMotherboards = (budget: number) =>
  Motherboard.aggregate([{ $match: { price: { $lte: budget } } }, { $sort: { price: 1 } }, { $limit: 5 }]);

const aggregatePSUs = (budget: number) =>
  PSU.aggregate([{ $match: { price: { $lte: budget } } }, { $sort: { price: 1 } }, { $limit: 5 }]);

const aggregateRAMs = (budget: number) =>
  RAM.aggregate([{ $match: { price: { $lte: budget } } }, { $sort: { price: 1 } }, { $limit: 5 }]);

const aggregateStorages = (budget: number) =>
  Storage.aggregate([{ $match: { price: { $lte: budget } } }, { $sort: { price: 1 } }, { $limit: 5 }]);

const aggregateGPUs = (budget: number) =>
  GPU.aggregate([{ $match: { price: { $lte: budget } } }, { $sort: { price: 1 } }, { $limit: 5 }]);

type Build = {
  processor: IProcessor;
  motherboard: IMotherboard;
  gpu: IGPU;
  ram: IRAM;
  psu: IPSU;
  storage: IStorage;
  cpuCooler: ICpuCooler;
  totalPrice: number;
};

const createCompatibleBuilds = async (budget: number): Promise<Build[]> => {
  const builds: Build[] = [];

  return Promise.all([
    aggregateProcessors(budget),
    aggregateMotherboards(budget),
    aggregateGPUs(budget),
    aggregateCPUCoolers(budget),
    aggregatePSUs(budget),
    aggregateRAMs(budget),
    aggregateStorages(budget),
  ])
    .then(
      ([processors, motherboards, gpus, cpuCoolers, psus, rams, storages]: [
        IProcessor[],
        IMotherboard[],
        IGPU[],
        ICpuCooler[],
        IPSU[],
        IRAM[],
        IStorage[],
      ]) => {
        processors.forEach((processor) => {
          motherboards.forEach((motherboard) => {
            // console.log(processor.socket == motherboard.socket);
            gpus.forEach((gpu) => {
              rams.forEach((ram) => {
                psus.forEach((psu) => {
                  storages.forEach((storage) => {
                    cpuCoolers.forEach((cpuCooler) => {
                      const totalPrice =
                        processor.price +
                        motherboard.price +
                        gpu.price +
                        ram.price +
                        psu.price +
                        storage.price +
                        cpuCooler.price;
                      if (totalPrice <= budget) {
                        builds.push({ processor, motherboard, gpu, ram, psu, storage, cpuCooler, totalPrice });
                      }
                    });
                  });
                });
              });
            });
          });
        });

        builds.sort((a, b) => b.totalPrice - a.totalPrice);
        return builds.slice(0, 5);
      },
    )
    .catch((err) => {
      console.error('Error during aggregation:', err);
      return [];
    });
};

export default createCompatibleBuilds;
