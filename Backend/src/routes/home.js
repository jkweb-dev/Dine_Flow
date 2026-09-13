import express from "express";
import { getHomeDeals , getHomeProducts , getHomeProductById } from "../controllers/home.js";

const router = express.Router();

router.get("/products", getHomeProducts);
router.get("/deals", getHomeDeals);
router.get("/products/:id", getHomeProductById);

export default router;