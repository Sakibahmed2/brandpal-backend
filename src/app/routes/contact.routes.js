import { Router } from "express";
import { contactControllers } from "../controllers/contact.controllers.js";

const router = Router();

router.post("/", contactControllers.sendContactMessage);

export const contactRoutes = router;
