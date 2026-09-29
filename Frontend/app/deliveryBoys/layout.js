"use client";

import ProtectedRoute from "@/Components/ProtectedRoute";
import DeliveryBoyLayout from "@/Components/Delivery_Boys/dashboard_Layout";

const DashboardRouteLayout = ({ children }) => {
  return (
    <ProtectedRoute allowedRoles={["deliveryBoy"]}>
      <DeliveryBoyLayout>
        {children}
      </DeliveryBoyLayout>
    </ProtectedRoute>
  );
};

export default DashboardRouteLayout;