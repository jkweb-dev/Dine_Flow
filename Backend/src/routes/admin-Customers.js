import express from "express";

import { getCustomers , getCustomerDetails } from "../controllers/admin-Customers.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getCustomers
);

router.get(
  "/:customerId",
  authMiddleware,
  roleMiddleware("admin"),
  getCustomerDetails
);

export default router;