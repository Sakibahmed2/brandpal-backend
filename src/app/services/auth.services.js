import config from "../config/index.js";
import AppError from "../errors/AppError.js";
import { User } from "../models/user.model.js";
import { createToken } from "../utils/createJwtToken.js";

const loginUser = async (payload) => {
  // check is user exist in database
  const isUserExist = await User.findOne({ email: payload.email });

  if (!isUserExist) {
    throw new AppError(404, "This user is not found!");
  }

  //check is password correct
  if (isUserExist?.password !== payload?.password) {
    throw new AppError(401, "Password is incorrect!");
  }

  //create token

  const jwtPayload = {
    email: isUserExist.email,
    role: isUserExist.role,
    id: isUserExist._id,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_secret,
    config.jwt_expires_in
  );

  return accessToken;
};

export const AuthServices = {
  loginUser,
};
