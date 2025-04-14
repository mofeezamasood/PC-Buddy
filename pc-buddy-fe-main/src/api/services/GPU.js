import APIS from "..";
import API from "../server";

export const addGPU = async (gpuData) => {
  const response = await API.post(APIS.gpu, gpuData);
  return response.data;
};

export const updateGPU = async (gpuId, updatedGPUData) => {
  const response = await API.put(`${APIS.gpu}/${gpuId}`, updatedGPUData);
  return response.data;
};

export const removeGPU = async (gpuId) => {
  const response = await API.delete(`${APIS.gpu}/${gpuId}`);
  return response.data;
};

export const getGPU = async (gpuId) => {
  const response = await API.get(`${APIS.gpu}/${gpuId}`);
  return response.data;
};

export const getAllGPUs = async () => {
  const response = await API.get(APIS.gpu);
  return response.data;
};
