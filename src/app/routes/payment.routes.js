import { Router } from "express";
import { PaymentControllers } from "../controllers/payment.controllers.js";

const router = Router();

router.post("/create-payment", PaymentControllers.createPaymentIntent);

router.post("/confirm-payment", PaymentControllers.confirmPayment);

router.get("/transactions", PaymentControllers.getAllTransactions);

router.get("/transactions/:email", PaymentControllers.getSingleTransactions);

router.put(
  "/transactions/update-to-success/:transactionId",
  PaymentControllers.updateTransactionToSuccess
);

export const paymentRoutes = router;
