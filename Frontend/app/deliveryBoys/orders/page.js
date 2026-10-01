"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin, Phone, Package, Navigation } from "lucide-react";
import toast from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import OrdersHeader from "@/Components/DeliveryBoyOrders/header";
import OrderFilters from "@/Components/DeliveryBoyOrders/orderFilter";
import OrderList from "@/Components/DeliveryBoyOrders/OrderList";
import OrdersSkeleton from "@/Components/DeliveryBoyOrders/OrderSkelton";

const OrdersPage = () => {
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState("all");

  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchMyOrders = async () => {
    try {
      setLoading(true);

      const response = await api.get("/delivery/orders");

      setOrders(response.data.orders || []);
    } catch (error) {
      handleError(error, router);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    if (activeFilter === "all") {
      return orders;
    }

    return orders.filter(
      (order) => order.orderStatus === activeFilter
    );
  }, [orders, activeFilter]);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseOrder = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      {/* Header */}
      <OrdersHeader orderCount={orders.length} />

      {/* Filters */}
      <OrderFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Content */}
      {loading ? (
        <OrdersSkeleton />
      ) : (
        <OrderList
          orders={filteredOrders}
          onView={handleViewOrder}
        />
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-4">
          <div className="max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl sm:max-w-2xl sm:rounded-[2rem]">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-orange-100 bg-white/95 px-5 py-5 backdrop-blur sm:px-7">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#f97316]">
                  Order Details
                </p>

                <h2 className="mt-1 text-xl font-black text-[#3d2922] sm:text-2xl">
                  #{selectedOrder.orderId}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleCloseOrder}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8f1] text-[#806d63] transition hover:bg-red-50 hover:text-[#c92a2a]"
                aria-label="Close order details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-5 sm:p-7">
              {/* Customer */}
              <div className="rounded-2xl bg-[#fffaf6] p-5">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#a8958b]">
                  Customer
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-base font-black text-[#3d2922]">
                      {selectedOrder.customer?.name}
                    </p>

                    <p className="mt-1 text-xs text-[#8c7468]">
                      User ID: {selectedOrder.customer?.userId}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-[#6f5a50]">
                    <Phone
                      size={16}
                      className="text-[#f97316]"
                    />

                    {selectedOrder.customer?.phone}
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl bg-[#fffaf6] p-5">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#a8958b]">
                  Delivery Address
                </p>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#c92a2a]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-black text-[#3d2922]">
                      {selectedOrder.delivery?.area}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#806d63]">
                      {selectedOrder.delivery?.address}
                    </p>

                    {selectedOrder.delivery?.instructions && (
                      <div className="mt-3 rounded-xl bg-orange-50 p-3">
                        <p className="text-[10px] font-black uppercase tracking-wide text-[#a8958b]">
                          Instructions
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#806d63]">
                          {selectedOrder.delivery.instructions}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#806d63] shadow-sm">
                    📍 {selectedOrder.delivery?.distance?.toFixed(1)} km
                  </span>

                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#806d63] shadow-sm">
                    📞 {selectedOrder.delivery?.phone}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="rounded-2xl border border-orange-100 bg-white p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Package
                    size={18}
                    className="text-[#f97316]"
                  />

                  <p className="text-sm font-black text-[#3d2922]">
                    Order Items
                  </p>
                </div>

                <div className="space-y-3">
                  {selectedOrder.items?.map((item, index) => (
                    <div
                      key={`${item.productId || item.dealId}-${index}`}
                      className="flex items-center justify-between gap-4 rounded-xl bg-[#fffaf6] p-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-[#3d2922]">
                          {item.name}
                        </p>

                        {item.size && (
                          <p className="mt-1 text-[11px] font-medium text-[#9b867b]">
                            Size: {item.size}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-xs font-bold text-[#806d63]">
                          × {item.quantity}
                        </p>

                        <p className="mt-1 text-sm font-black text-[#c92a2a]">
                          Rs.{" "}
                          {(
                            item.price * item.quantity
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="rounded-2xl bg-[#3d2922] p-5 text-white">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 text-white/70">
                    <span>Subtotal</span>

                    <span>
                      Rs.{" "}
                      {selectedOrder.pricing?.subtotal?.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 text-white/70">
                    <span>Delivery Fee</span>

                    <span>
                      Rs.{" "}
                      {selectedOrder.pricing?.deliveryFee?.toLocaleString()}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between gap-4">
                      <span className="font-black">Total</span>

                      <span className="text-lg font-black text-[#ffd166]">
                        Rs.{" "}
                        {selectedOrder.pricing?.total?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              {selectedOrder.delivery?.latitude &&
                selectedOrder.delivery?.longitude && (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selectedOrder.delivery.latitude},${selectedOrder.delivery.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#f97316] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-100 transition hover:bg-[#e8660b]"
                  >
                    <Navigation size={18} />
                    Open Delivery Location
                  </a>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;