import express from "express";

import {
  getActiveOrders,
  startDelivery,
  markOrderDelivered,
} from "../controllers/deliveryActiveOrders.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("deliveryBoy"),
  getActiveOrders
);

router.patch(
  "/:orderId/start",
  authMiddleware,
  roleMiddleware("deliveryBoy"),
  startDelivery
);

router.patch(
  "/:orderId/deliver",
  authMiddleware,
  roleMiddleware("deliveryBoy"),
  markOrderDelivered
);

export default router;