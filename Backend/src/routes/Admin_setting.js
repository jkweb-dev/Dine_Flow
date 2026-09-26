import express from "express";

import { changeAdminCredentials } from "../controllers/Admin_setting.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Change admin user ID and/or password
router.patch(
  "/credentials",
  authMiddleware,
  roleMiddleware("admin"),
  changeAdminCredentials
);

export default router;