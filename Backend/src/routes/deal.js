import express from "express";

import { createDeal , getAllDeals , getDealById , updateDeal , deleteDeal , toggleDealAvailability } from "../controllers/deal.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Create deal
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  createDeal
);

// Get all deals
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getAllDeals
);

// Get single deal
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  getDealById
);

// Update deal
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  updateDeal
);

// Delete deal
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteDeal
);

// Toggle deal availability
router.patch(
  "/:id/availability",
  authMiddleware,
  roleMiddleware("admin"),
  toggleDealAvailability
);

export default router;