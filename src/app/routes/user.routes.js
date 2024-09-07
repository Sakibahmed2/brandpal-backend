import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";

const router = Router();

router.post("/create-user", userControllers.createUser);

export const userRoutes = router;
