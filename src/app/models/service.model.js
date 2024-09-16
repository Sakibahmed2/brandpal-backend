import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  icon: {
    type: String,
    required: [true, "Icon is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  features: {
    type: [String],
    required: [true, "Features are required"],
  },
  offerPrice: {
    type: Number,
    default: 0,
  },
});

export const Services = mongoose.model("Services", serviceSchema);
