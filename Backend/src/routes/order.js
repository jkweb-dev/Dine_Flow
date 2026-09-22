import express from "express";

import { createOrder  , getCustomerOrder , getCustomerOrders} from "../controllers/orderController.js";

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



router.get(
  "/",
  authMiddleware,
  roleMiddleware("customer"),
  getCustomerOrders
);

router.get(
  "/:orderId",
  authMiddleware,
  roleMiddleware("customer"),
  getCustomerOrder
);

export default router;

