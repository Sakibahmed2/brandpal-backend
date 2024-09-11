import AppError from "../errors/AppError.js";
import { User } from "../models/user.model.js";

const createUserIntoDB = async (userData) => {
  // Check if the user already exists
  const isUserExists = await User.findOne({ email: userData.email });

  if (isUserExists) {
    throw new AppError(400, "User already exists");
  }

  const result = await User.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();

  return result;
};

const getSingleUserFromDB = async (userId) => {
  const result = await User.findOne({ _id: userId });

  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
