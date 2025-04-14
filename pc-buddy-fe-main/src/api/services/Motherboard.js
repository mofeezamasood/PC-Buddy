import APIS from "..";
import API from "../server";

export const addMotherboard = async (motherboardData) => {
  const response = await API.post(APIS.motherboard, motherboardData);
  return response.data;
};

export const updateMotherboard = async (motherboardId, updatedMotherboardData) => {
  const response = await API.put(
    `${APIS.motherboard}/${motherboardId}`,
    updatedMotherboardData
  );
  return response.data;
};

export const removeMotherboard = async (motherboardId) => {
  const response = await API.delete(`${APIS.motherboard}/${motherboardId}`);
  return response.data;
};

export const getMotherboard = async (motherboardId) => {
  const response = await API.get(`${APIS.motherboard}/${motherboardId}`);
  return response.data;
};

export const getAllMotherboards = async () => {
  const response = await API.get(APIS.motherboard);
  return response.data;
};
