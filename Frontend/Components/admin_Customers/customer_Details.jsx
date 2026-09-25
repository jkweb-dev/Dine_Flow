"use client";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  PackageCheck,
  Phone,
  ReceiptText,
  ShoppingBag,
  UserRound,
  X,
  XCircle,
} from "lucide-react";

const CustomerDetails = ({
  customer,
  details,
  loading,
  onClose,
}) => {
  if (!customer) {
    return null;
  }

  const data = details?.customer || customer;
  const statistics = details?.statistics;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close customer details"
        onClick={onClose}
        className="absolute inset-0 bg-[#3d2922]/35 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 flex h-full w-full flex-col bg-[#fffaf6] shadow-2xl sm:max-w-xl lg:max-w-2xl">
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#c92a2a] to-[#a91f1f] px-5 py-6 text-white sm:px-7">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-[#c92a2a] shadow-lg">
                {data.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-100">
                  Customer details
                </p>

                <h2 className="mt-1 truncate text-xl font-black">
                  {data.name}
                </h2>

                <p className="mt-1 text-xs font-bold text-red-100">
                  {data.userId}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
          {loading ? (
            <div className="animate-pulse space-y-5">
              <div className="h-28 rounded-2xl bg-white" />

              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 rounded-2xl bg-white" />
                <div className="h-24 rounded-2xl bg-white" />
                <div className="h-24 rounded-2xl bg-white" />
                <div className="h-24 rounded-2xl bg-white" />
              </div>

              <div className="h-48 rounded-2xl bg-white" />
            </div>
          ) : (
            <div className="space-y-5">
              {/* Personal information */}
              <section className="rounded-[1.5rem] border border-orange-100 bg-white p-5 shadow-[0_12px_35px_rgba(88,47,27,0.05)]">
                <div className="mb-4 flex items-center gap-2">
                  <UserRound
                    size={17}
                    className="text-[#f97316]"
                  />

                  <h3 className="text-sm font-black text-[#3d2922]">
                    Personal information
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#fffaf6] p-3.5">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                      Full name
                    </p>

                    <p className="mt-1 text-sm font-black text-[#3d2922]">
                      {data.name}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#fffaf6] p-3.5">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                      User ID
                    </p>

                    <p className="mt-1 text-sm font-black text-[#3d2922]">
                      {data.userId}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#fffaf6] p-3.5">
                    <div className="flex items-center gap-1.5">
                      <Phone size={13} className="text-[#f97316]" />

                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                        Phone
                      </p>
                    </div>

                    <p className="mt-1 text-sm font-black text-[#3d2922]">
                      {data.phone}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#fffaf6] p-3.5">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays
                        size={13}
                        className="text-[#f97316]"
                      />

                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                        Member since
                      </p>
                    </div>

                    <p className="mt-1 text-sm font-black text-[#3d2922]">
                      {new Date(data.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </section>

              {/* Statistics */}
              <section>
                <div className="mb-3 flex items-center gap-2">
                  <ShoppingBag
                    size={17}
                    className="text-[#f97316]"
                  />

                  <h3 className="text-sm font-black text-[#3d2922]">
                    Order activity
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <StatBox
                    label="Total orders"
                    value={statistics?.totalOrders || 0}
                    icon={ShoppingBag}
                  />

                  <StatBox
                    label="Active"
                    value={statistics?.activeOrders || 0}
                    icon={Clock3}
                  />

                  <StatBox
                    label="Delivered"
                    value={statistics?.deliveredOrders || 0}
                    icon={CheckCircle2}
                  />

                  <StatBox
                    label="Cancelled"
                    value={statistics?.cancelledOrders || 0}
                    icon={XCircle}
                  />

                  <StatBox
                    label="Rejected"
                    value={statistics?.rejectedOrders || 0}
                    icon={XCircle}
                  />

                  <StatBox
                    label="Total spent"
                    value={`Rs. ${(statistics?.totalSpent || 0).toLocaleString()}`}
                    icon={ReceiptText}
                  />
                </div>
              </section>

              {/* Orders */}
              <section className="rounded-[1.5rem] border border-orange-100 bg-white p-5 shadow-[0_12px_35px_rgba(88,47,27,0.05)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ReceiptText
                      size={17}
                      className="text-[#f97316]"
                    />

                    <h3 className="text-sm font-black text-[#3d2922]">
                      Order history
                    </h3>
                  </div>

                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-black text-[#c45b17]">
                    {details?.orders?.length || 0} orders
                  </span>
                </div>

                {!details?.orders?.length ? (
                  <div className="rounded-xl border border-dashed border-orange-200 bg-[#fffaf6] px-4 py-8 text-center">
                    <PackageCheck
                      size={24}
                      className="mx-auto text-[#d4b8a8]"
                    />

                    <p className="mt-2 text-xs font-bold text-[#8c7468]">
                      This customer has not placed any orders yet.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {details.orders.map((order) => (
                      <div
                        key={order._id}
                        className="rounded-xl border border-orange-100 bg-[#fffaf6] p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-black text-[#3d2922]">
                              #{order.orderId}
                            </p>

                            <p className="mt-1 text-[10px] font-bold text-[#a58b7d]">
                              {new Date(
                                order.createdAt
                              ).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>

                          <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-extrabold capitalize text-[#c45b17]">
                            {order.orderStatus?.replaceAll(
                              "_",
                              " "
                            )}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center justify-between border-t border-orange-100 pt-3">
                          <span className="text-xs font-bold text-[#8c7468]">
                            {order.items?.length || 0}{" "}
                            {order.items?.length === 1
                              ? "item"
                              : "items"}
                          </span>

                          <span className="text-sm font-black text-[#c92a2a]">
                            Rs.{" "}
                            {order.pricing?.total?.toLocaleString() ||
                              0}
                          </span>
                        </div>

                        {order.delivery?.area && (
                          <div className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-[#a58b7d]">
                            <MapPin size={12} />
                            {order.delivery.area}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

const StatBox = ({ label, value, icon: Icon }) => {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-[0_10px_30px_rgba(88,47,27,0.04)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
        <Icon size={16} />
      </div>

      <p className="mt-3 truncate text-lg font-black text-[#3d2922]">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>

      <p className="mt-1 text-[10px] font-bold leading-4 text-[#8c7468]">
        {label}
      </p>
    </div>
  );
};

export default CustomerDetails;