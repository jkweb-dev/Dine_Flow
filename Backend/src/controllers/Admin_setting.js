import bcrypt from "bcryptjs";

import User from "../models/user.js";

// CHANGE ADMIN CREDENTIALS
export const changeAdminCredentials = async (req, res) => {
  try {
    const {
      currentPassword,
      newUserId,
      newPassword,
    } = req.body;

    // Current password is always required
    if (!currentPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password is required.",
      });
    }

    // At least one new credential must be provided
    if (!newUserId && !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Provide a new user ID or new password.",
      });
    }

    /*
     * req.user.userId comes from the JWT.
     *
     * Here we assume the JWT stores the custom User.userId.
     */
    const admin = await User.findOne({
      userId: req.user.userId,
      role: "admin",
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin account not found.",
      });
    }

    // Verify current password
    const passwordMatches = await bcrypt.compare(
      currentPassword,
      admin.password
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    // Change user ID
    if (newUserId) {
      const trimmedUserId = newUserId.trim();

      if (trimmedUserId.length < 3) {
        return res.status(400).json({
          success: false,
          message: "User ID must be at least 3 characters long.",
        });
      }

      // Check whether another user already has this user ID
      const existingUser = await User.findOne({
        userId: trimmedUserId,
        _id: { $ne: admin._id },
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "This user ID is already in use.",
        });
      }

      admin.userId = trimmedUserId;
    }

    // Change password
    if (newPassword) {
      if (newPassword.length < 6) {
        return res.status(400).json({
          success: false,
          message: "New password must be at least 6 characters long.",
        });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      admin.password = hashedPassword;
    }

    await admin.save();

    res.status(200).json({
      success: true,
      message: "Admin credentials updated successfully.",
    });
  } catch (error) {
    console.error("Change admin credentials error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update admin credentials.",
    });
  }
};