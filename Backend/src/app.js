import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import Userrouter from "./routes/user.js";
import Admin_Userrouter from "./routes/admin-user.js";
import productRoutes from "./routes/productRoute.js";
import dealRoutes from "./routes/deal.js";
import homeRoutes from "./routes/home.js";
import orderRoutes from "./routes/order.js";
import accountRoutes from "./routes/account.js";
import adminCustomerRoutes from "./routes/admin-Customers.js";
import adminOrderRoutes from "./routes/Admin_Orders.js";

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
app.use("/api/home", homeRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/admin/customers", adminCustomerRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
// Admin routes


export default app;