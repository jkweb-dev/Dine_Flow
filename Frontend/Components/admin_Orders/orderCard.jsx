"use client";

import {
  Eye,
  Phone,
  ShoppingBag,
  Bike,
  UserRound,
  MapPin,
  Clock3,
} from "lucide-react";

import StatusBadge from "./statusBadge";

const OrderCard = ({ order, onSelectOrder }) => {
  return (
    <article className="rounded-[1.5rem] border border-orange-100 bg-white p-4 shadow-[0_12px_35px_rgba(88,47,27,0.05)] sm:p-5">
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-[#3d2922]">
            #{order.orderId}
          </p>

          <div className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-[#9b867b]">
            <Clock3 size={12} />

            {new Date(order.createdAt).toLocaleDateString(
              "en-PK",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </div>
        </div>

        <StatusBadge status={order.orderStatus} />
      </div>

      {/* Customer */}
      <div className="mt-5 rounded-xl bg-[#fffaf6] p-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-[#5f493f]">
              {order.customer?.name || "Unknown customer"}
            </p>

            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#9b867b]">
              <Phone size={12} />

              <span className="truncate">
                {order.customer?.phone || "No phone"}
              </span>
            </div>
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#f97316] shadow-sm">
            <UserRound size={17} />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-orange-100 bg-white p-3">
          <div className="flex items-center gap-2 text-[#9b867b]">
            <ShoppingBag size={15} />

            <span className="text-[11px] font-bold">
              Items
            </span>
          </div>

          <p className="mt-1 text-sm font-black text-[#3d2922]">
            {order.items.length}{" "}
            {order.items.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="rounded-xl border border-orange-100 bg-white p-3">
          <p className="text-[11px] font-bold text-[#9b867b]">
            Total
          </p>

          <p className="mt-1 text-sm font-black text-[#3d2922]">
            Rs.{" "}
            {Number(
              order.pricing?.total || 0
            ).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Delivery */}
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-orange-100 p-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            order.deliveryBoy
              ? "bg-orange-50 text-[#f97316]"
              : "bg-red-50 text-[#c92a2a]"
          }`}
        >
          {order.deliveryBoy ? (
            <Bike size={18} />
          ) : (
            <UserRound size={18} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#9b867b]">
            Delivery Boy
          </p>

          <p
            className={`mt-0.5 truncate text-sm font-extrabold ${
              order.deliveryBoy
                ? "text-[#5f493f]"
                : "text-[#c92a2a]"
            }`}
          >
            {order.deliveryBoy
              ? order.deliveryBoy.name
              : "Unassigned"}
          </p>
        </div>
      </div>

      {/* Area */}
      <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#8c7468]">
        <MapPin size={14} className="shrink-0 text-[#f97316]" />

        <span className="truncate">
          {order.delivery?.area || "No area provided"}
        </span>
      </div>

      {/* Action */}
      <button
        type="button"
        onClick={() => onSelectOrder(order)}
        className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#c92a2a] text-sm font-extrabold text-white shadow-lg shadow-red-100 transition hover:bg-[#b82424] active:scale-[0.99]"
      >
        <Eye size={17} />

        View Order
      </button>
    </article>
  );
};

export default OrderCard;