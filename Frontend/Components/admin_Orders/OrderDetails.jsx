"use client";

import {
  X,
  UserRound,
  Phone,
  ShoppingBag,
  MapPin,
  Navigation,
  CreditCard,
  Bike,
  Clock3,
  ReceiptText,
  MessageSquareText,
} from "lucide-react";

import StatusBadge from "./statusBadge";

const OrderDetails = ({
  order,
  deliveryBoys,
  onClose,
  onStatusChange,
  onAssignDeliveryBoy,
  updatingStatus,
  assigningDeliveryBoy,
}) => {
  if (!order) {
    return null;
  }

  const statusOptions = [
    "pending",
    "confirmed",
    "assigned",
    "out_for_delivery",
    "delivered",
    "cancelled",
    "rejected",
  ];

  const statusLabels = {
    pending: "Pending",
    confirmed: "Confirmed",
    assigned: "Assigned",
    out_for_delivery: "Out for Delivery",
    delivered: "Delivered",
    cancelled: "Cancelled",
    rejected: "Rejected",
  };

  const handleStatusChange = (event) => {
    onStatusChange(event.target.value);
  };

  const handleDeliveryBoyChange = (event) => {
    onAssignDeliveryBoy(event.target.value);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close order details"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[#2f211c]/40 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-[#fffaf6] shadow-[-20px_0_60px_rgba(45,25,15,0.16)]">
        {/* Header */}
        <div className="shrink-0 border-b border-orange-100 bg-white px-5 py-5 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <ReceiptText
                  size={18}
                  className="text-[#f97316]"
                />

                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f97316]">
                  Order Details
                </span>
              </div>

              <h2 className="mt-2 text-xl font-black tracking-tight text-[#3d2922]">
                #{order.orderId}
              </h2>

              <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#9b867b]">
                <Clock3 size={13} />

                {new Date(order.createdAt).toLocaleString(
                  "en-PK",
                  {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }
                )}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-[#fffaf6] text-[#8c7468] transition hover:border-red-100 hover:bg-red-50 hover:text-[#c92a2a]"
            >
              <X size={19} />
            </button>
          </div>

          <div className="mt-4">
            <StatusBadge status={order.orderStatus} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          <div className="space-y-5">

            {/* Customer */}
            <section className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
                  <UserRound size={17} />
                </div>

                <h3 className="text-sm font-black text-[#3d2922]">
                  Customer
                </h3>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    Name
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#5f493f]">
                    {order.customer?.name || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    Phone
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-[#5f493f]">
                    <Phone size={13} className="text-[#f97316]" />
                    {order.customer?.phone || "N/A"}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    User ID
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#5f493f]">
                    {order.customer?.userId || "N/A"}
                  </p>
                </div>
              </div>
            </section>

            {/* Items */}
            <section className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-[#c92a2a]">
                  <ShoppingBag size={17} />
                </div>

                <h3 className="text-sm font-black text-[#3d2922]">
                  Order Items
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                {order.items.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex gap-3 rounded-xl bg-[#fffaf6] p-3"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-orange-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <ShoppingBag
                            size={20}
                            className="text-orange-300"
                          />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-extrabold text-[#5f493f]">
                        {item.name}
                      </p>

                      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-[#9b867b]">
                        {item.size && (
                          <span>
                            Size: {item.size}
                          </span>
                        )}

                        <span>
                          Qty: {item.quantity}
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-black text-[#3d2922]">
                        Rs.{" "}
                        {Number(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Delivery */}
            <section className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
                  <MapPin size={17} />
                </div>

                <h3 className="text-sm font-black text-[#3d2922]">
                  Delivery
                </h3>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    Area
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#5f493f]">
                    {order.delivery?.area || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    Address
                  </p>

                  <p className="mt-1 text-sm font-bold leading-6 text-[#5f493f]">
                    {order.delivery?.address || "N/A"}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                      Phone
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-[#5f493f]">
                      <Phone size={13} className="text-[#f97316]" />
                      {order.delivery?.phone || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                      Distance
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-[#5f493f]">
                      <Navigation size={13} className="text-[#f97316]" />
                      {order.delivery?.distance ?? 0} km
                    </p>
                  </div>
                </div>

                {order.delivery?.instructions && (
                  <div className="rounded-xl bg-orange-50 p-3">
                    <div className="flex items-start gap-2">
                      <MessageSquareText
                        size={15}
                        className="mt-0.5 shrink-0 text-[#f97316]"
                      />

                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                          Delivery Instructions
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-[#5f493f]">
                          {order.delivery.instructions}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CreditCard size={17} />
                </div>

                <h3 className="text-sm font-black text-[#3d2922]">
                  Payment
                </h3>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    Method
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#5f493f]">
                    Cash on Delivery
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-bold capitalize text-[#5f493f]">
                    {order.payment?.status || "pending"}
                  </p>
                </div>
              </div>
            </section>

            {/* Management */}
            <section className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-[#c92a2a]">
                  <Bike size={17} />
                </div>

                <h3 className="text-sm font-black text-[#3d2922]">
                  Order Management
                </h3>
              </div>

              <div className="mt-4 space-y-4">

                {/* Status */}
                <div>
                  <label
                    htmlFor="order-status"
                    className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]"
                  >
                    Order Status
                  </label>

                  <select
                    id="order-status"
                    value={order.orderStatus}
                    onChange={handleStatusChange}
                    disabled={updatingStatus}
                    className="mt-2 h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 text-sm font-bold text-[#5f493f] outline-none transition focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {statusOptions.map((status) => (
                      <option
                        key={status}
                        value={status}
                      >
                        {statusLabels[status]}
                      </option>
                    ))}
                  </select>

                  {updatingStatus && (
                    <p className="mt-1.5 text-[11px] font-semibold text-[#f97316]">
                      Updating status...
                    </p>
                  )}
                </div>

                {/* Delivery Boy */}
                <div>
                  <label
                    htmlFor="delivery-boy"
                    className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8958b]"
                  >
                    Delivery Boy
                  </label>

                  <select
                    id="delivery-boy"
                    value={order.deliveryBoy?._id || ""}
                    onChange={handleDeliveryBoyChange}
                    disabled={assigningDeliveryBoy}
                    className="mt-2 h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 text-sm font-bold text-[#5f493f] outline-none transition focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">
                      Unassigned
                    </option>

                    {deliveryBoys.map((boy) => (
                      <option
                        key={boy._id}
                        value={boy._id}
                      >
                        {boy.name} — {boy.phone}
                      </option>
                    ))}
                  </select>

                  {assigningDeliveryBoy && (
                    <p className="mt-1.5 text-[11px] font-semibold text-[#f97316]">
                      Updating delivery assignment...
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="rounded-2xl border border-orange-100 bg-white p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <ReceiptText size={17} />
                </div>

                <h3 className="text-sm font-black text-[#3d2922]">
                  Pricing
                </h3>
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-[#8c7468]">
                    Subtotal
                  </span>

                  <span className="font-bold text-[#5f493f]">
                    Rs.{" "}
                    {Number(
                      order.pricing?.subtotal || 0
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-[#8c7468]">
                    Delivery Fee
                  </span>

                  <span className="font-bold text-[#5f493f]">
                    Rs.{" "}
                    {Number(
                      order.pricing?.deliveryFee || 0
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-orange-100 pt-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-black text-[#3d2922]">
                      Total
                    </span>

                    <span className="text-xl font-black text-[#c92a2a]">
                      Rs.{" "}
                      {Number(
                        order.pricing?.total || 0
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </aside>
    </div>
  );
};

export default OrderDetails;