import APIS from "..";
import API from "../server";

export const addCPUCooler = async (cpuCoolerData) => {
  const response = await API.post(APIS.cpuCooler, cpuCoolerData);
  return response.data;
};

export const updateCPUCooler = async (cpuCoolerId, updatedCPUCoolerData) => {
  const response = await API.put(
    `${APIS.cpuCooler}/${cpuCoolerId}`,
    updatedCPUCoolerData
  );
  return response.data;
};

export const removeCPUCooler = async (cpuCoolerId) => {
  const response = await API.delete(`${APIS.cpuCooler}/${cpuCoolerId}`);
  return response.data;
};

export const getCPUCooler = async (cpuCoolerId) => {
  const response = await API.get(`${APIS.cpuCooler}/${cpuCoolerId}`);
  return response.data;
};

export const getAllCPUCoolers = async () => {
  const response = await API.get(APIS.cpuCooler);
  return response.data;
};
