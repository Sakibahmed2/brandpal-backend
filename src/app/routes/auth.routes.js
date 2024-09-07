import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/login", AuthControllers.loginUser);

export const authRoutes = router;
