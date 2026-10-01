"use client";

import {
  MapPin,
  Phone,
  Package,
  Navigation,
  Clock3,
  ChevronRight,
} from "lucide-react";

const OrderCard = ({ order, onView }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "assigned":
        return {
          label: "Assigned",
          className: "bg-orange-50 text-orange-600 border-orange-100",
        };

      case "out_for_delivery":
        return {
          label: "Out for Delivery",
          className: "bg-blue-50 text-blue-600 border-blue-100",
        };

      case "delivered":
        return {
          label: "Delivered",
          className: "bg-green-50 text-green-600 border-green-100",
        };

      default:
        return {
          label: status?.replaceAll("_", " ") || "Unknown",
          className: "bg-gray-50 text-gray-600 border-gray-100",
        };
    }
  };

  const status = getStatusStyles(order.orderStatus);

  const itemCount = order.items?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-[0_12px_35px_rgba(88,47,27,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(88,47,27,0.1)]">
      {/* Top */}
      <div className="flex flex-col gap-4 border-b border-orange-50 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-black text-[#3d2922]">
              #{order.orderId}
            </span>

            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-[#a08d83]">
            <Clock3 size={14} />

            {new Date(order.createdAt).toLocaleString("en-PK", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </div>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#a8958b]">
            Total
          </p>

          <p className="mt-0.5 text-xl font-black text-[#c92a2a]">
            Rs. {order.pricing?.total?.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Customer + Delivery */}
      <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
        {/* Customer */}
        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#a8958b]">
            Customer
          </p>

          <p className="text-sm font-black text-[#3d2922]">
            {order.customer?.name}
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#806d63]">
            <Phone size={14} className="text-[#f97316]" />

            {order.customer?.phone}
          </div>
        </div>

        {/* Delivery */}
        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#a8958b]">
            Delivery
          </p>

          <div className="flex items-start gap-2">
            <MapPin
              size={16}
              className="mt-0.5 shrink-0 text-[#c92a2a]"
            />

            <div>
              <p className="text-sm font-black text-[#3d2922]">
                {order.delivery?.area}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#806d63]">
                {order.delivery?.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="border-t border-orange-50 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <Package
              size={16}
              className="shrink-0 text-[#f97316]"
            />

            <p className="truncate text-xs font-bold text-[#806d63]">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>

          <p className="shrink-0 text-xs font-bold text-[#806d63]">
            {order.delivery?.distance?.toFixed(1)} km
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {order.items?.map((item, index) => (
            <span
              key={`${item.productId || item.dealId}-${index}`}
              className="rounded-lg bg-orange-50 px-2.5 py-1.5 text-[10px] font-bold text-[#806d63]"
            >
              {item.name} × {item.quantity}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="flex flex-col gap-3 border-t border-orange-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#a8958b]">
            Payment
          </p>

          <p className="mt-1 text-xs font-black capitalize text-[#5f493f]">
            {order.payment?.method?.replaceAll("_", " ")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onView(order)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-3 text-xs font-black text-white shadow-md shadow-red-100 transition hover:bg-[#ad2020]"
        >
          View Order
          <ChevronRight size={16} />
        </button>
      </div>
    </article>
  );
};

export default OrderCard;