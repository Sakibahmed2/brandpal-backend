import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";

const router = Router();

router.post("/create-user", userControllers.createUser);

router.get("/", userControllers.getAllUser);

router.get("/:userId", userControllers.getSingleUser);

export const userRoutes = router;
