import { Router } from "express";
import { serviceControllers } from "../controllers/service.controllers.js";

const router = Router();

router.post("/", serviceControllers.createService);

router.get("/", serviceControllers.getAllServices);

router.get("/:serviceId", serviceControllers.getSingleService);

router.put("/:serviceId", serviceControllers.updateService);

router.delete("/:serviceId", serviceControllers.deleteService);

export const serviceRoutes = router;
