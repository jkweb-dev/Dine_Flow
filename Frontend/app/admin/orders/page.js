"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import Header from "@/Components/admin_Orders/header";
import OrderStats from "@/Components/admin_Orders/orderStats";
import OrderFilters from "@/Components/admin_Orders/OrderFilters";
import OrderTable from "@/Components/admin_Orders/table";
import OrderDetails from "@/Components/admin_Orders/OrderDetails";
import OrderCard from "@/Components/admin_Orders/orderCard";
import EmptyOrders from "@/Components/admin_Orders/EmptyOrders";
import LoadingSkeleton from "@/Components/admin_Orders/loadingSkelton";

const OrdersPage = () => {
  const router = useRouter();

  // Orders data
  const [orders, setOrders] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [deliveryBoys, setDeliveryBoys] = useState([]);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [deliveryBoy, setDeliveryBoy] = useState("all");
  const [sort, setSort] = useState("newest");

  // Loading states
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [assigningDeliveryBoy, setAssigningDeliveryBoy] = useState(false);

  // Selected order
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fetch orders
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await api.get("/admin/orders", {
        params: {
          search,
          status,
          deliveryBoy,
          sort,
        },
      });

      setOrders(response.data.orders || []);
      setStatistics(response.data.statistics || null);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch delivery boys
  const fetchDeliveryBoys = async () => {
    try {
      const response = await api.get("/admin/orders/delivery-boys");
    
      setDeliveryBoys(response.data.deliveryBoys || []);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    }
  };

  // Fetch orders whenever filters change
  useEffect(() => {
    fetchOrders();
  }, [search, status, deliveryBoy, sort]);

  // Fetch delivery boys once
  useEffect(() => {
    fetchDeliveryBoys();
  }, []);

  // Open order details
  const handleSelectOrder = async (order) => {
    try {
      setSelectedOrder(order);
      setDetailsLoading(true);

      const response = await api.get(
        `/admin/orders/${order.orderId}`
      );

      setSelectedOrder(response.data.order);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setDetailsLoading(false);
    }
  };

  // Close order details
  const handleCloseOrder = () => {
    setSelectedOrder(null);
  };

  // Update order status
  const handleStatusChange = async (newStatus) => {
    if (!selectedOrder) {
      return;
    }

    try {
      setUpdatingStatus(true);

      const response = await api.patch(
        `/admin/orders/${selectedOrder.orderId}/status`,
        {
          orderStatus: newStatus,
        }
      );

      const updatedOrder = response.data.order;

      // Update drawer
      setSelectedOrder(updatedOrder);

      // Update order in the visible list
      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order.orderId === updatedOrder.orderId
            ? updatedOrder
            : order
        )
      );

      // Refresh statistics
      await fetchOrders();
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setUpdatingStatus(false);
    }
  };

  // Assign / unassign delivery boy
  const handleAssignDeliveryBoy = async (deliveryBoyId) => {
    if (!selectedOrder) {
      return;
    }

    try {
      setAssigningDeliveryBoy(true);

      const response = await api.patch(
        `/admin/orders/${selectedOrder.orderId}/assign`,
        {
          deliveryBoyId: deliveryBoyId || null,
        }
      );

      const updatedOrder = response.data.order;

      // Update drawer
      setSelectedOrder(updatedOrder);

      // Update order in the visible list
      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order.orderId === updatedOrder.orderId
            ? updatedOrder
            : order
        )
      );

      // Refresh statistics
      await fetchOrders();
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setAssigningDeliveryBoy(false);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearch("");
    setStatus("all");
    setDeliveryBoy("all");
    setSort("newest");
  };

  const hasFilters =
    search.trim() ||
    status !== "all" ||
    deliveryBoy !== "all" ||
    sort !== "newest";

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-6">
          {/* Header */}
          <Header
            orderCount={statistics?.totalOrders || 0}
          />

          {/* Statistics */}
          <OrderStats statistics={statistics} />

          {/* Filters */}
          <OrderFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            deliveryBoy={deliveryBoy}
            setDeliveryBoy={setDeliveryBoy}
            sort={sort}
            setSort={setSort}
            deliveryBoys={deliveryBoys}
          />

          {/* Orders */}
          {orders.length === 0 ? (
            <EmptyOrders
              hasFilters={hasFilters}
              onClearFilters={handleClearFilters}
            />
          ) : (
            <>
              {/* Desktop */}
              <OrderTable
                orders={orders}
                onSelectOrder={handleSelectOrder}
              />

              {/* Mobile / Tablet */}
              <section className="space-y-3 lg:hidden">
                {orders.map((order) => (
                  <OrderCard
                    key={order._id}
                    order={order}
                    onSelectOrder={handleSelectOrder}
                  />
                ))}
              </section>
            </>
          )}
        </div>
      </div>

      {/* Order Details Drawer */}
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          deliveryBoys={deliveryBoys}
          onClose={handleCloseOrder}
          onStatusChange={handleStatusChange}
          onAssignDeliveryBoy={handleAssignDeliveryBoy}
          updatingStatus={updatingStatus}
          assigningDeliveryBoy={assigningDeliveryBoy}
        />
      )}

      {/* Loading overlay for order details */}
      {detailsLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#2f211c]/20 backdrop-blur-[2px]">
          <div className="rounded-2xl border border-orange-100 bg-white px-6 py-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-orange-100 border-t-[#f97316]" />
              <p className="text-sm font-bold text-[#5f493f]">
                Loading order details...
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default OrdersPage;