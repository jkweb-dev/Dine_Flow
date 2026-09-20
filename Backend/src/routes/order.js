import express from "express";

import { createOrder } from "../controllers/orderController.js";

import authMiddleware from "../middleware/authMidddleware.js";

import roleMiddleware from "../middleware/roleMiddleware.js";



const router = express.Router();

// Create order

router.post(
  "/",
  authMiddleware,
   roleMiddleware("customer"),
  createOrder
);

export default router;