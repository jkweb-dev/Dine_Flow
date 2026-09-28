import express from "express";

import { getAdminDashboard } from "../controllers/admin_Home.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Get complete admin dashboard overview
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getAdminDashboard
);

export default router;