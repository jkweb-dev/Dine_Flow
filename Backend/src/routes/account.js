import express from "express";

import { getAccount } from "../controllers/account.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("customer"),
  getAccount
);

export default router;