"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import ActiveOrdersHeader from "@/Components/ActiveOrdersForDeliveryBoy/header";
import ActiveOrderList from "@/Components/ActiveOrdersForDeliveryBoy/OrderList";
import EmptyActiveOrders from "@/Components/ActiveOrdersForDeliveryBoy/EmptyOrders";
import ActiveOrdersSkeleton from "@/Components/ActiveOrdersForDeliveryBoy/Skelton";

const ActiveOrdersPage = () => {
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  // Fetch active orders
  const fetchActiveOrders = async () => {
    try {
      setLoading(true);

      const response = await api.get("/delivery/active-orders");

      setOrders(response.data.orders || []);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveOrders();
  }, []);

  // Start delivery
  const handleStartDelivery = async (order) => {
    try {
      setActionLoading(order._id);

      const response = await api.patch(
        `/delivery/active-orders/${order.orderId}/start`
      );

      const updatedOrder = response.data.order;

      setOrders((prevOrders) =>
        prevOrders.map((item) =>
          item._id === updatedOrder._id ? updatedOrder : item
        )
      );

      toast.success("Delivery started successfully.");
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setActionLoading(null);
    }
  };

  // Mark order as delivered
  const handleMarkDelivered = async (order) => {
    try {
      setActionLoading(order._id);

      await api.patch(
        `/delivery/active-orders/${order.orderId}/deliver`
      );

      // Remove the delivered order from active orders
      setOrders((prevOrders) =>
        prevOrders.filter((item) => item._id !== order._id)
      );

      toast.success("Order marked as delivered.");
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-full bg-[#fffaf6] p-4 sm:p-6 lg:p-8">
        <ActiveOrdersSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#fffaf6] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <ActiveOrdersHeader count={orders.length} />

        {orders.length === 0 ? (
          <EmptyActiveOrders />
        ) : (
          <ActiveOrderList
            orders={orders}
            onStartDelivery={handleStartDelivery}
            onMarkDelivered={handleMarkDelivered}
            actionLoading={actionLoading}
          />
        )}
      </div>
    </div>
  );
};

export default ActiveOrdersPage;