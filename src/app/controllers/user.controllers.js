import { userServices } from "../services/user.services.js";
import sendResponse from "../utils/sendResponse.js";

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;

    const result = await userServices.createUserIntoDB(userData);

    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const result = await userServices.getAllUserFromDB();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "List of all users",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getSingleUserFromDB(userId);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User details",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const claimOffer = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const { offerName } = req.body;

    const result = await userServices.claimOffer(userId, offerName);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Offer claimed successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  claimOffer,
};
