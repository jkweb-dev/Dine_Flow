"use client";

import { ArrowRight, CalendarDays, ReceiptText } from "lucide-react";
import { useRouter } from "next/navigation";

const RecentOrders = ({ orders }) => {
  const router = useRouter();

  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_18px_55px_rgba(88,47,27,0.06)] sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#a58b7d]">
            Your history
          </p>

          <h2 className="mt-1 text-xl font-black text-[#3d2922]">
            Recent orders
          </h2>
        </div>

        {orders?.length > 0 && (
          <button
            type="button"
            onClick={() => router.push("/orders")}
            className="text-xs font-black text-[#c92a2a] hover:underline"
          >
            View all
          </button>
        )}
      </div>

      {!orders || orders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-orange-200 bg-[#fffaf6] px-5 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-[#f97316]">
            <ReceiptText size={24} />
          </div>

          <h3 className="mt-4 text-base font-black text-[#3d2922]">
            No orders yet
          </h3>

          <p className="mx-auto mt-1 max-w-sm text-xs font-medium leading-5 text-[#8c7468]">
            Once you place an order, your recent orders will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => {
            const orderDate = new Date(order.createdAt).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            );

            return (
              <button
                key={order._id}
                type="button"
                onClick={() => router.push("/orders")}
                className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-orange-100 bg-[#fffaf6] p-4 text-left transition hover:border-orange-200 hover:bg-orange-50/60"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#c92a2a] shadow-sm ring-1 ring-orange-100">
                    <ReceiptText size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-[#3d2922]">
                      #{order.orderId}
                    </p>

                    <div className="mt-1 flex items-center gap-1.5 text-[11px] font-bold text-[#9a8175]">
                      <CalendarDays size={12} />
                      {orderDate}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-sm font-black text-[#c92a2a]">
                    Rs. {order.pricing?.total?.toLocaleString() || 0}
                  </p>

                  <span className="mt-1 inline-block rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-extrabold capitalize text-[#c45b17]">
                    {order.orderStatus?.replaceAll("_", " ")}
                  </span>
                </div>

                <ArrowRight
                  size={16}
                  className="hidden text-[#b99b8b] transition group-hover:translate-x-1 sm:block"
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RecentOrders;