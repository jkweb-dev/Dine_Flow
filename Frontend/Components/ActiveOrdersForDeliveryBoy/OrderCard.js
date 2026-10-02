"use client";

import {
  MapPin,
  Phone,
  Package,
  Navigation,
  Clock3,
  Play,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const ActiveOrderCard = ({
  order,
  onStartDelivery,
  onMarkDelivered,
  actionLoading,
}) => {
  const isAssigned = order.orderStatus === "assigned";

  const isOutForDelivery =
    order.orderStatus === "out_for_delivery";

  const itemCount =
    order.items?.reduce(
      (total, item) => total + item.quantity,
      0
    ) || 0;

  const openLocation = () => {
    const latitude = order.delivery?.latitude;
    const longitude = order.delivery?.longitude;

    if (!latitude || !longitude) {
      return;
    }

    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-[0_14px_40px_rgba(88,47,27,0.06)]">
      {/* Header */}
      <div className="border-b border-orange-50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base font-black text-[#3d2922]">
                #{order.orderId}
              </span>

              <span
                className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wide ${
                  isAssigned
                    ? "border-orange-100 bg-orange-50 text-orange-600"
                    : "border-blue-100 bg-blue-50 text-blue-600"
                }`}
              >
                {isAssigned
                  ? "Assigned"
                  : "Out for Delivery"}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-1.5 text-xs text-[#9b867b]">
              <Clock3 size={14} />

              {new Date(
                order.createdAt
              ).toLocaleString("en-PK", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </div>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#a8958b]">
              Order Total
            </p>

            <p className="mt-1 text-xl font-black text-[#c92a2a]">
              Rs.{" "}
              {Number(
                order.pricing?.total || 0
              ).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Customer + Delivery */}
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
        {/* Customer */}
        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#a8958b]">
            Customer
          </p>

          <p className="text-sm font-black text-[#3d2922]">
            {order.customer?.name || "Customer"}
          </p>

          <a
            href={`tel:${order.customer?.phone || ""}`}
            className="mt-2 flex w-fit items-center gap-2 text-xs font-bold text-[#806d63] transition hover:text-[#c92a2a]"
          >
            <Phone
              size={14}
              className="text-[#f97316]"
            />

            {order.customer?.phone || "No phone"}
          </a>
        </div>

        {/* Delivery */}
        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#a8958b]">
            Delivery Location
          </p>

          <div className="flex items-start gap-2">
            <MapPin
              size={16}
              className="mt-0.5 shrink-0 text-[#c92a2a]"
            />

            <div className="min-w-0">
              <p className="text-sm font-black text-[#3d2922]">
                {order.delivery?.area || "Delivery Area"}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#806d63]">
                {order.delivery?.address || "No address available"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="border-t border-orange-50 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Package
            size={16}
            className="text-[#f97316]"
          />

          <span className="text-xs font-bold text-[#806d63]">
            {itemCount}{" "}
            {itemCount === 1 ? "item" : "items"}
          </span>
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

      {/* Actions */}
      <div className="grid gap-3 border-t border-orange-50 p-5 sm:grid-cols-2 sm:p-6">
        <button
          type="button"
          onClick={openLocation}
          disabled={
            !order.delivery?.latitude ||
            !order.delivery?.longitude
          }
          className="flex items-center justify-center gap-2 rounded-xl border border-orange-100 bg-[#fffaf6] px-4 py-3 text-xs font-black text-[#5f493f] transition hover:border-orange-200 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Navigation size={17} />
          Open Location
        </button>

        {isAssigned && (
          <button
            type="button"
            onClick={() => onStartDelivery(order)}
            disabled={actionLoading === order._id}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-4 py-3 text-xs font-black text-white shadow-md shadow-red-100 transition hover:bg-[#ad2020] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {actionLoading === order._id ? (
              <LoaderCircle
                size={17}
                className="animate-spin"
              />
            ) : (
              <Play size={17} fill="currentColor" />
            )}

            Start Delivery
          </button>
        )}

        {isOutForDelivery && (
          <button
            type="button"
            onClick={() => onMarkDelivered(order)}
            disabled={actionLoading === order._id}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-xs font-black text-white shadow-md shadow-green-100 transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {actionLoading === order._id ? (
              <LoaderCircle
                size={17}
                className="animate-spin"
              />
            ) : (
              <CheckCircle2 size={17} />
            )}

            Mark Delivered
          </button>
        )}
      </div>
    </article>
  );
};

export default ActiveOrderCard;