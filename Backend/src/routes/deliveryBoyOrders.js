import express from "express";

import { getMyOrders } from "../controllers/deliveryBoyOrders.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Get orders assigned to logged-in delivery boy
router.get(
  "/",
  authMiddleware,
  roleMiddleware("deliveryBoy"),
  getMyOrders
);

export default router;