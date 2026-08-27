"use client";

import ProtectedRoute from "@/Components/ProtectedRoute";
import DashboardLayout from "@/Components/AdminDashboard/dashboardLayout";

const DashboardRouteLayout = ({ children }) => {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default DashboardRouteLayout;