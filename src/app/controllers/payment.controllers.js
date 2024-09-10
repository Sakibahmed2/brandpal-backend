import { PaymentServices } from "../services/payment.services.js";
import sendResponse from "../utils/sendResponse.js";

const createPaymentIntent = async (req, res, next) => {
  try {
    const { amount } = req.body;
    const payment = await PaymentServices.createPaymentIntent(amount);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Payment created successfully",
      data: payment.client_secret,
    });
  } catch (err) {
    next(err);
  }
};

const confirmPayment = async (req, res, next) => {
  try {
    const payment = req.body;

    const result = await PaymentServices.confirmPayment(payment);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Payment confirmed successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const PaymentControllers = {
  createPaymentIntent,
  confirmPayment,
};
