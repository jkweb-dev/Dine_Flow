import express from "express";
import { getHomeDeals , getHomeProducts } from "../controllers/home.js";

const router = express.Router();

router.get("/products", getHomeProducts);
router.get("/deals", getHomeDeals);

export default router;