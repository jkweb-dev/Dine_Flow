import express from "express";
import { register ,login , logout , getMe } from "../controllers/user.js";
import authMiddleware from "../middleware/authMidddleware.js";

const router = express.Router();

// Public customer registration
router.post("/register", register);

// Login for all existing users
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Get currently authenticated user
router.get("/me", authMiddleware, getMe);

export default router;