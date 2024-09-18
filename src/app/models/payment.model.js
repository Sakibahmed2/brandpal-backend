import { model, Schema } from "mongoose";

const paymentScheme = new Schema({
  transactionId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  serviceName: [
    {
      type: String,
      required: true,
    },
  ],
  serviceId: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: String,
    enum: ["success", "pending"],
    default: "pending",
  },
  offer: {
    type: String,
    default: "none",
  },
});

export const Transaction = model("Transaction", paymentScheme);
