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

export const userControllers = {
  createUser,
};
