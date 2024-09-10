import { Router } from "express";
import { PaymentControllers } from "../controllers/payment.controllers.js";

const router = Router();

router.post("/create-payment", PaymentControllers.createPaymentIntent);

router.post("/confirm-payment", PaymentControllers.confirmPayment);

export const paymentRoutes = router;
