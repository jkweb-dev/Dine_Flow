"use client";

import {
  Eye,
  Phone,
  ShoppingBag,
  Bike,
  UserRound,
  MapPin,
} from "lucide-react";

import StatusBadge from "./statusBadge";

const OrderTable = ({ orders, onSelectOrder }) => {
  return (
    <section className="hidden overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_14px_40px_rgba(88,47,27,0.05)] lg:block">
      {/* Table header */}
      <div className="border-b border-orange-100 bg-[#fffaf6] px-6 py-4">
        <div className="grid grid-cols-[1.1fr_1.4fr_0.9fr_1.1fr_1.2fr_0.5fr] items-center gap-4">
          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#9b867b]">
            Order
          </p>

          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#9b867b]">
            Customer
          </p>

          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#9b867b]">
            Total
          </p>

          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#9b867b]">
            Status
          </p>

          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#9b867b]">
            Delivery Boy
          </p>

          <p className="text-[11px] text-center font-black uppercase tracking-[0.12em] text-[#9b867b]">
            View
          </p>
        </div>
      </div>

      {/* Orders */}
      <div className="divide-y divide-orange-50">
        {orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-[1.1fr_1.4fr_0.9fr_1.1fr_1.2fr_0.5fr] items-center gap-4 px-6 py-5 transition hover:bg-[#fffaf6]"
          >
            {/* Order */}
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-[#3d2922]">
                #{order.orderId}
              </p>

              <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#9b867b]">
                <ShoppingBag size={13} />

                <span>
                  {order.items.length}{" "}
                  {order.items.length === 1 ? "item" : "items"}
                </span>
              </div>
            </div>

            {/* Customer */}
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-[#5f493f]">
                {order.customer?.name || "Unknown customer"}
              </p>

              <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#9b867b]">
                <Phone size={12} />

                <span className="truncate">
                  {order.customer?.phone || "No phone"}
                </span>
              </div>
            </div>

            {/* Total */}
            <div>
              <p className="text-sm font-black text-[#3d2922]">
                Rs. {Number(order.pricing?.total || 0).toLocaleString()}
              </p>

              <p className="mt-1 text-[11px] font-medium text-[#9b867b]">
                {order.payment?.method === "cash_on_delivery"
                  ? "Cash on Delivery"
                  : order.payment?.method}
              </p>
            </div>

            {/* Status */}
            <div>
              <StatusBadge status={order.orderStatus} />
            </div>

            {/* Delivery Boy */}
            <div className="min-w-0">
              {order.deliveryBoy ? (
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
                    <Bike size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-[#5f493f]">
                      {order.deliveryBoy.name}
                    </p>

                    <p className="truncate text-[11px] font-medium text-[#9b867b]">
                      {order.deliveryBoy.phone}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#c92a2a]">
                    <UserRound size={17} />
                  </div>

                  <span className="text-xs font-bold text-[#c92a2a]">
                    Unassigned
                  </span>
                </div>
              )}
            </div>

            {/* View */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => onSelectOrder(order)}
                aria-label={`View order ${order.orderId}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-white text-[#8c7468] shadow-sm transition hover:border-orange-200 hover:bg-orange-50 hover:text-[#c92a2a]"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderTable;