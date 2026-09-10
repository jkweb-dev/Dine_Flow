import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import Userrouter from "./routes/user.js";
import Admin_Userrouter from "./routes/admin-user.js";
import productRoutes from "./routes/productRoute.js";
import dealRoutes from "./routes/deal.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "DineFlow API is running",
  });
});

app.use("/api/auth",Userrouter);
app.use("/api/admin",Admin_Userrouter);
app.use("/api/admin/products", productRoutes);
app.use("/api/admin/deals", dealRoutes);

// Admin routes


export default app;