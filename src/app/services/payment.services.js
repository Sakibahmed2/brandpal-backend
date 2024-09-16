import Stripe from "stripe";
import config from "../config/index.js";
import { Transaction } from "../models/payment.model.js";
import AppError from "../errors/AppError.js";

// const stripe = require("stripe")(config.stripe_secret_key);
const stripe = new Stripe(config.stripe_secret_key);

const createPaymentIntent = async (totalPrice) => {
  const amount = totalPrice * 100;

  const payment = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return payment;
};

const confirmPayment = async (data) => {
  const result = await Transaction.create(data);

  return result;
};

const getAllTransactions = async () => {
  const transactions = await Transaction.find();

  return transactions;
};

const getSingleTransactions = async (email) => {
  const result = await Transaction.find({ email: email });

  return result;
};

const updateTransactionToSuccess = async (transactionId) => {
  const result = await Transaction.findByIdAndUpdate(transactionId, {
    status: "success",
  });

  return result;
};

export const PaymentServices = {
  createPaymentIntent,
  confirmPayment,
  getAllTransactions,
  getSingleTransactions,
  updateTransactionToSuccess,
};
