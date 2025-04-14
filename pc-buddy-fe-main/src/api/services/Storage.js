import APIS from "..";
import API from "../server";

export const addStorage = async (storageData) => {
  const response = await API.post(APIS.storage, storageData);
  return response.data;
};

export const updateStorage = async (storageId, updatedStorageData) => {
  const response = await API.put(
    `${APIS.storage}/${storageId}`,
    updatedStorageData
  );
  return response.data;
};

export const removeStorage = async (storageId) => {
  const response = await API.delete(`${APIS.storage}/${storageId}`);
  return response.data;
};

export const getStorage = async (storageId) => {
  const response = await API.get(`${APIS.storage}/${storageId}`);
  return response.data;
};

export const getAllStorages = async () => {
  const response = await API.get(APIS.storage);
  return response.data;
};
