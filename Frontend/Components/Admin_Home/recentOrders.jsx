"use client";

import {
  ArrowRight,
  ShoppingBag,
  Phone,
} from "lucide-react";

import StatusBadge from "../admin_Orders/statusBadge";

const RecentOrders = ({ orders }) => {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white shadow-[0_14px_40px_rgba(88,47,27,0.05)]">
      <div className="flex items-center justify-between border-b border-orange-100 px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-base font-black text-[#3d2922]">
            Recent Orders
          </h2>

          <p className="mt-1 text-xs font-medium text-[#9b867b]">
            Latest customer activity
          </p>
        </div>

        <a
          href="/admin/orders"
          className="flex items-center gap-1 text-xs font-black text-[#c92a2a] transition hover:text-[#f97316]"
        >
          View All
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="divide-y divide-orange-50">
        {(orders || []).length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col gap-3 px-5 py-4 transition hover:bg-[#fffaf6] sm:flex-row sm:items-center sm:px-6"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
                  <ShoppingBag size={18} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-[#3d2922]">
                    #{order.orderId}
                  </p>

                  <p className="mt-0.5 truncate text-xs font-semibold text-[#5f493f]">
                    {order.customer?.name || "Unknown customer"}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-[10px] text-[#9b867b]">
                    <Phone size={10} />
                    {order.customer?.phone || "No phone"}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <div>
                  <p className="text-sm font-black text-[#3d2922]">
                    Rs.{" "}
                    {Number(
                      order.pricing?.total || 0
                    ).toLocaleString()}
                  </p>

                  <p className="mt-1 text-[10px] font-medium text-[#9b867b]">
                    {order.items?.length || 0} items
                  </p>
                </div>

                <StatusBadge
                  status={order.orderStatus}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="px-6 py-12 text-center">
            <p className="text-sm font-semibold text-[#9b867b]">
              No orders available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentOrders;