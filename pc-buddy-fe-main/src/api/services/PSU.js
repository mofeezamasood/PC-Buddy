import APIS from "..";
import API from "../server";

export const addPSU = async (psuData) => {
  const response = await API.post(APIS.psu, psuData);
  return response.data;
};

export const updatePSU = async (psuId, updatedPSUData) => {
  const response = await API.put(`${APIS.psu}/${psuId}`, updatedPSUData);
  return response.data;
};

export const removePSU = async (psuId) => {
  const response = await API.delete(`${APIS.psu}/${psuId}`);
  return response.data;
};

export const getPSU = async (psuId) => {
  const response = await API.get(`${APIS.psu}/${psuId}`);
  return response.data;
};

export const getAllPSUs = async () => {
  const response = await API.get(APIS.psu);
  return response.data;
};
