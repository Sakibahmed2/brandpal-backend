import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "Bangladesh",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  offer: {
    type: String,
    default: "No offer",
    enum: ["No offer", "free-trial", "40%-off"],
  },
  offerStartDate: {
    type: Date,
  },
  offerEndDate: {
    type: Date,
  },
});

export const User = mongoose.model("User", userSchema);
