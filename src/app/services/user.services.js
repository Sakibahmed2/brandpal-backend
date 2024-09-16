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

const claimOffer = async (userId, offer) => {
  // Check if the user has already claimed the offer
  const user = await User.findOne({ _id: userId });
  if (user.offer === offer) {
    throw new AppError(400, "You have already claimed this offer");
  }

  if (user.offer === "free-trial" || user.offer === "40%-off") {
    throw new AppError(400, "You have an active offer");
  }

  // offer end  data for free-trial
  if (offer === "free-trial") {
    const offerEndDate = new Date();
    offerEndDate.setDate(offerEndDate.getDate() + 7);

    const result = await User.findByIdAndUpdate(
      userId,
      {
        offer: offer,
        offerStartDate: new Date(),
        offerEndDate: offerEndDate,
      },
      { new: true }
    );
    return result;
  }

  // offer end  data for 40%-off
  if (offer === "40%-off") {
    const offerEndDate = new Date();
    offerEndDate.setDate(offerEndDate.getDate() + 365);

    const result = await User.findByIdAndUpdate(
      userId,
      {
        offer: offer,
        offerStartDate: new Date(),
        offerEndDate: offerEndDate,
      },
      {
        new: true,
      }
    );

    return result;
  }

  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  claimOffer,
};
