import express from "express";
import { createDeliveryBoy } from "../controllers/admin-user.js";
import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin-only delivery boy creation
router.post(
  "/delivery-boys",
  authMiddleware,
  roleMiddleware("admin"),
  createDeliveryBoy
);

export default router;