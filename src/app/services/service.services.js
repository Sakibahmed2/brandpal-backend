import { Services } from "../models/service.model.js";
import { User } from "../models/user.model.js";

const createServiceIntoDB = async (serviceData) => {
  const result = await Services.create(serviceData);

  return result;
};

const getAllServicesFromDB = async (userId) => {
  const user = await User.findById(userId);
  const services = await Services.find();

  if (user?.offer === "40%-off") {
    const discountedServices = services.map((service) => {
      const discountedPrice = (service.price * 60) / 100;
      return { ...service._doc, offerPrice: discountedPrice };
    });

    return discountedServices;
  }

  const result = services;

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
