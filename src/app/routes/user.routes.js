import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";

const route = Router();

route.post("/", userControllers.createUser);

export const userRoutes = route;
