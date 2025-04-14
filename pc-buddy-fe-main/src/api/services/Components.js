import { ComponentsIndex } from "../../constants/Components";
import API from "../server";
import {
  addCPUCooler,
  getAllCPUCoolers,
  getCPUCooler,
  removeCPUCooler,
  updateCPUCooler,
} from "./CPUCooler";
import { addGPU, getAllGPUs, getGPU, removeGPU, updateGPU } from "./GPU";
import {
  addMotherboard,
  getAllMotherboards,
  getMotherboard,
  removeMotherboard,
  updateMotherboard,
} from "./Motherboard";
import { addPSU, getAllPSUs, getPSU, removePSU, updatePSU } from "./PSU";
import {
  addProcessor,
  getAllProcessors,
  getProcessor,
  removeProcessor,
  updateProcessor,
} from "./Processor";
import { addRAM, getAllRAMs, getRAM, removeRAM, updateRAM } from "./RAM";
import {
  addStorage,
  getAllStorages,
  getStorage,
  removeStorage,
  updateStorage,
} from "./Storage";

export const getComponents = async () => {
  return await API.get("/");
};

export const getAllComponents = async (type) => {
  switch (type) {
    case ComponentsIndex.PROCESSOR:
      return await getAllProcessors();
    case ComponentsIndex.CPU_COOLER:
      return await getAllCPUCoolers();
    case ComponentsIndex.MOTHERBOARD:
      return await getAllMotherboards();
    case ComponentsIndex.GPU:
      return await getAllGPUs();
    case ComponentsIndex.PSU:
      return await getAllPSUs();
    case ComponentsIndex.RAM:
      return await getAllRAMs();
    case ComponentsIndex.STORAGE:
      return await getAllStorages();
    default:
      throw new Error("Invalid component type");
  }
};

export const getComponent = async (type, componentId) => {
  switch (type) {
    case ComponentsIndex.PROCESSOR:
      return await getProcessor(componentId);
    case ComponentsIndex.CPU_COOLER:
      return await getCPUCooler(componentId);
    case ComponentsIndex.MOTHERBOARD:
      return await getMotherboard(componentId);
    case ComponentsIndex.GPU:
      return await getGPU(componentId);
    case ComponentsIndex.PSU:
      return await getPSU(componentId);
    case ComponentsIndex.RAM:
      return await getRAM(componentId);
    case ComponentsIndex.STORAGE:
      return await getStorage(componentId);
    default:
      throw new Error("Invalid component type");
  }
};

export const addComponent = async (type, data) => {
  switch (type) {
    case ComponentsIndex.PROCESSOR:
      await addProcessor(data);
      break;
    case ComponentsIndex.CPU_COOLER:
      await addCPUCooler(data);
      break;
    case ComponentsIndex.MOTHERBOARD:
      await addMotherboard(data);
      break;
    case ComponentsIndex.GPU:
      await addGPU(data);
      break;
    case ComponentsIndex.PSU:
      await addPSU(data);
      break;
    case ComponentsIndex.RAM:
      await addRAM(data);
      break;
    case ComponentsIndex.STORAGE:
      await addStorage(data);
      break;
    default:
      throw new Error("Invalid component type");
  }
};

export const updateComponent = async (type, componentId, updatedData) => {
  switch (type) {
    case ComponentsIndex.PROCESSOR:
      return await updateProcessor(componentId, updatedData);
    case ComponentsIndex.CPU_COOLER:
      return await updateCPUCooler(componentId, updatedData);
    case ComponentsIndex.MOTHERBOARD:
      return await updateMotherboard(componentId, updatedData);
    case ComponentsIndex.GPU:
      return await updateGPU(componentId, updatedData);
    case ComponentsIndex.PSU:
      return await updatePSU(componentId, updatedData);
    case ComponentsIndex.RAM:
      return await updateRAM(componentId, updatedData);
    case ComponentsIndex.STORAGE:
      return await updateStorage(componentId, updatedData);
    default:
      throw new Error("Invalid component type");
  }
};

export const removeComponent = async (type, componentId) => {
  switch (type) {
    case ComponentsIndex.PROCESSOR:
      return await removeProcessor(componentId);
    case ComponentsIndex.CPU_COOLER:
      return await removeCPUCooler(componentId);
    case ComponentsIndex.MOTHERBOARD:
      return await removeMotherboard(componentId);
    case ComponentsIndex.GPU:
      return await removeGPU(componentId);
    case ComponentsIndex.PSU:
      return await removePSU(componentId);
    case ComponentsIndex.RAM:
      return await removeRAM(componentId);
    case ComponentsIndex.STORAGE:
      return await removeStorage(componentId);
    default:
      throw new Error("Invalid component type");
  }
};
export const getBuild = async (budget) => {
  return await API.get(`/build?budget=${budget}`);
};