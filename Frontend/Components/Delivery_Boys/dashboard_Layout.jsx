"use client";

import { useState } from "react";

import Sidebar from "./sideBar";
import Topbar from "./TopBar";

const DeliveryBoyLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fffaf6]">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Area */}
      <div className="min-h-screen lg:pl-[280px]">
        {/* Topbar */}
        <Topbar onMenuClick={openSidebar} />

        {/* Page Content */}
        <main className="min-h-[calc(100vh-76px)] p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DeliveryBoyLayout;