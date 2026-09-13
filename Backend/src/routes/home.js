import express from "express";
import { getHomeDeals , getHomeProducts , getHomeProductById  , getHomeDealById} from "../controllers/home.js";

const router = express.Router();

router.get("/products", getHomeProducts);
router.get("/deals", getHomeDeals);
router.get("/products/:id", getHomeProductById);
router.get("/deals/:id", getHomeDealById);

export default router;