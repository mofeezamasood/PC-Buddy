import APIS from "..";
import API from "../server";

export const addRAM = async (ramData) => {
  const response = await API.post(APIS.ram, ramData);
  return response.data;
};

export const updateRAM = async (ramId, updatedRAMData) => {
  const response = await API.put(`${APIS.ram}/${ramId}`, updatedRAMData);
  return response.data;
};

export const removeRAM = async (ramId) => {
  const response = await API.delete(`${APIS.ram}/${ramId}`);
  return response.data;
};

export const getRAM = async (ramId) => {
  const response = await API.get(`${APIS.ram}/${ramId}`);
  return response.data;
};

export const getAllRAMs = async () => {
  const response = await API.get(APIS.ram);
  return response.data;
};