"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/authProvider";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) {
      return;
    }

    // Not authenticated
    if (!user) {
      router.replace("/login");
      return;
    }

    // Authenticated but role is not allowed
    if (
      allowedRoles.length > 0 &&
      !allowedRoles.includes(user.role)
    ) {
      router.replace("/");
    }
  }, [loading, user, allowedRoles, router]);

  // Still checking authentication
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8f1]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#f97316]/20 border-t-[#c92a2a]" />

          <p className="text-sm font-semibold text-[#756b65]">
            Checking your account...
          </p>
        </div>
      </main>
    );
  }

  // Not authenticated
  if (!user) {
    return null;
  }

  // Authenticated but unauthorized role
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    return null;
  }

  // Authenticated and authorized
  return children;
};

export default ProtectedRoute;