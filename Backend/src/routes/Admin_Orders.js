import express from "express";

import { getAllOrders , getDeliveryBoys ,getOrderDetails ,updateOrderStatus ,assignDeliveryBoy } from "../controllers/Admin_Orders.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();


// Get all orders
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getAllOrders
);


// Get all delivery boys
router.get(
  "/delivery-boys",
  authMiddleware,
  roleMiddleware("admin"),
  getDeliveryBoys
);


// Get one order
router.get(
  "/:orderId",
  authMiddleware,
  roleMiddleware("admin"),
  getOrderDetails
);


// Update order status
router.patch(
  "/:orderId/status",
  authMiddleware,
  roleMiddleware("admin"),
  updateOrderStatus
);


// Assign delivery boy
router.patch(
  "/:orderId/assign",
  authMiddleware,
  roleMiddleware("admin"),
  assignDeliveryBoy
);


export default router;