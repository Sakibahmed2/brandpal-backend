import { AuthServices } from "../services/auth.services.js";
import sendResponse from "../utils/sendResponse.js";

const loginUser = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await AuthServices.loginUser(userInfo);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  loginUser,
};
