import APIS from "..";
import API from "../server";

export const addProcessor = async (processorData) => {
  const response = await API.post(APIS.processor, processorData);
  return response.data;
};

export const updateProcessor = async (processorId, updatedProcessorData) => {
  const response = await API.put(
    `${APIS.processor}/${processorId}`,
    updatedProcessorData
  );
  return response.data;
};

export const removeProcessor = async (processorId) => {
  const response = await API.delete(`${APIS.processor}/${processorId}`);
  return response.data;
};

export const getProcessor = async (processorId) => {
  const response = await API.get(`${APIS.processor}/${processorId}`);
  return response.data;
};

export const getAllProcessors = async () => {
  const response = await API.get(APIS.processor);
  return response.data;
};