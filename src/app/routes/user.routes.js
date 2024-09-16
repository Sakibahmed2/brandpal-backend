import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";

const router = Router();

router.post("/create-user", userControllers.createUser);

router.get("/", userControllers.getAllUser);

router.get("/:userId", userControllers.getSingleUser);

router.put("/claim-offer/:userId", userControllers.claimOffer);

export const userRoutes = router;
