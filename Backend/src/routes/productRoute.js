import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  toggleAvailability,
} from "../controllers/productController.js";

import authMiddleware from "../middleware/authMidddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();


// ======================================================
// GET ALL PRODUCTS
// ======================================================

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getProducts
);


// ======================================================
// GET SINGLE PRODUCT
// ======================================================

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  getProductById
);


// ======================================================
// CREATE PRODUCT
// ======================================================

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  createProduct
);


// ======================================================
// UPDATE PRODUCT
// ======================================================

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  updateProduct
);


// ======================================================
// DELETE PRODUCT
// ======================================================

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProduct
);


// ======================================================
// TOGGLE PRODUCT AVAILABILITY
// ======================================================

router.patch(
  "/:id/availability",
  authMiddleware,
  roleMiddleware("admin"),
  toggleAvailability
);


export default router;