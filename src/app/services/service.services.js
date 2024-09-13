import { Services } from "../models/service.model.js";

const createServiceIntoDB = async (serviceData) => {
  const result = await Services.create(serviceData);

  return result;
};

const getAllServicesFromDB = async () => {
  const result = await Services.find();

  return result;
};

const getSingleServiceFromDB = async (serviceId) => {
  const result = await Services.findById(serviceId);

  return result;
};

const updateServiceIntoDB = async (serviceId, serviceData) => {
  const result = await Services.findByIdAndUpdate(serviceId, serviceData, {
    new: true,
  });

  return result;
};

const deleteServiceFromDB = async (serviceId) => {
  const result = await Services.findByIdAndDelete(serviceId);

  return result;
};

export const serviceServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
};
