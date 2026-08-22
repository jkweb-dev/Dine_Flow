import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const createDeliveryBoy = async (req, res) => {
  try {
    const { userId, name, phone, password } = req.body;

    if (!userId || !name || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "User ID, name, phone and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const existingUser = await User.findOne({
      $or: [{ userId }, { phone }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User ID or phone number already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const deliveryBoy = await User.create({
      userId,
      name,
      phone,
      password: hashedPassword,
      role: "deliveryBoy",
    });

    return res.status(201).json({
      success: true,
      message: "Delivery boy account created successfully",
      user: {
        userId: deliveryBoy.userId,
        name: deliveryBoy.name,
        phone: deliveryBoy.phone,
        role: deliveryBoy.role,
      },
    });
  } catch (error) {
    console.error("Create delivery boy error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while creating delivery boy",
    });
  }
};