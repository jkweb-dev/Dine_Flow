"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import { useAuth } from "@/src/context/authProvider";

import Header from "@/Components/Admin_settings/header";
import CredentialsCard from "@/Components/Admin_settings/credentials";

const SettingsPage = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newUserId, setNewUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedUserId = newUserId.trim();

    // Current password is required
    if (!currentPassword) {
      toast.error("Please enter your current password.");
      return;
    }

    // At least one credential must be changed
    if (!trimmedUserId && !newPassword) {
      toast.error("Enter a new user ID or a new password.");
      return;
    }

    // Validate user ID
    if (trimmedUserId && trimmedUserId.length < 3) {
      toast.error("User ID must be at least 3 characters long.");
      return;
    }

    // Validate password
    if (newPassword) {
      if (newPassword.length < 6) {
        toast.error("New password must be at least 6 characters long.");
        return;
      }

      if (!confirmPassword) {
        toast.error("Please confirm your new password.");
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error("New passwords do not match.");
        return;
      }
    }

    // Prevent unnecessary confirm password input
    if (!newPassword && confirmPassword) {
      toast.error(
        "Remove the confirmation password or enter a new password."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await api.patch(
        "/admin/settings/credentials",
        {
          currentPassword,
          newUserId: trimmedUserId || undefined,
          newPassword: newPassword || undefined,
        }
      );

      toast.success(
        response.data.message ||
          "Admin credentials updated successfully."
      );

      /*
       * The admin's login credentials have changed.
       * Log out the current session and require a fresh login.
       */
      await logout();

      router.replace("/login");
    } catch (error) {
      handleError(error, router, {
        redirectOn401: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          {/* Header */}
          <Header />

          {/* Credentials */}
          <CredentialsCard
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            newUserId={newUserId}
            setNewUserId={setNewUserId}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;