"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "./sidebar";
import Topbar from "./topbar";

import { useAuth } from "@/src/context/authProvider";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="h-screen bg-[#fff8f1] text-[#241b16]">

      {/* ================= DASHBOARD STRUCTURE ================= */}
      <div className="flex h-screen">

        {/* ================= SIDEBAR ================= */}
        <Sidebar
          user={user}
          isOpen={sidebarOpen}
          onClose={handleCloseSidebar}
          onLogout={handleLogout}
        />

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* ================= TOPBAR ================= */}
          <Topbar
            user={user}
            onMenuClick={handleOpenSidebar}
          />

          {/* ================= MAIN CONTENT ================= */}
          <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;