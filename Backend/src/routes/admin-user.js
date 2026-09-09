import express from "express";
import { createDeliveryBoy , getAllDeliveryBoys , deleteDeliveryBoy } from "../controllers/admin-user.js";
import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin-only delivery boy creation
;

router.get(
  "/delivery-boys",
  authMiddleware,
  roleMiddleware("admin"),
  getAllDeliveryBoys
);


router.post(
  "/delivery-boys",
  authMiddleware,
  roleMiddleware("admin"),
  createDeliveryBoy
)


router.delete(
  "/delivery-boys/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteDeliveryBoy
);

export default router;