import { Components } from '../constants/components';
import CPUCooler from '../models/cpuCooler';
import GPU from '../models/gpu';
import Motherboard from '../models/motherboard';
import Processor from '../models/processor';
import psu from '../models/psu';
import RAM from '../models/ram';
import Storage from '../models/storage';
import { readXLSXFile } from './readXLSX';

const populateData = async (type: string, data: any) => {
  switch (type) {
    case Components.PROCESSOR:
      await Processor.insertMany(data);
      console.log('Processors processed');
      break;
    case Components.CPU_COOLER:
      await CPUCooler.insertMany(data);
      console.log('CPU Coolers processed');
      break;
    case Components.MOTHERBOARD:
      await Motherboard.insertMany(data);
      console.log('Motherboard processed');
      break;
    case Components.RAM:
      await RAM.insertMany(data);
      console.log('RAM processed');
      break;
    case Components.STORAGE:
      await Storage.insertMany(data);
      console.log('Storage processed');
      break;
    case Components.PSU:
      await psu.insertMany(data);
      console.log('PSU processed');
      break;
    case Components.GPU:
      await GPU.insertMany(data);
      console.log('GPUs processed');
      break;
    default:
      console.log('Unknown Component Type');
  }
};

export const populateXLXSFiles = () => {
  readXLSXFile(Components.GPU);
  readXLSXFile(Components.PROCESSOR);
  readXLSXFile(Components.MOTHERBOARD);
  readXLSXFile(Components.CPU_COOLER);
  readXLSXFile(Components.RAM);
  readXLSXFile(Components.STORAGE);
  readXLSXFile(Components.PSU);
};

export default populateData;
