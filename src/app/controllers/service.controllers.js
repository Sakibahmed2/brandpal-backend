import { serviceServices } from "../services/service.services.js";
import sendResponse from "../utils/sendResponse.js";

const createService = async (req, res, next) => {
  try {
    const serviceData = req.body;
    const result = await serviceServices.createServiceIntoDB(serviceData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Service created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const userId = req.query.userId;

    const result = await serviceServices.getAllServicesFromDB(userId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All services fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleService = async (req, res, next) => {
  try {
    const { serviceId } = req.params;
    const result = await serviceServices.getSingleServiceFromDB(serviceId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateService = async (req, res, next) => {
  try {
    const { serviceId } = req.params;
    const updateData = req.body;

    const result = await serviceServices.updateServiceIntoDB(
      serviceId,
      updateData
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const { serviceId } = req.params;

    const result = await serviceServices.deleteServiceFromDB(serviceId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceControllers = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};
