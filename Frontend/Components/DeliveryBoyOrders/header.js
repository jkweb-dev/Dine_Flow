"use client";

import { Package, Truck } from "lucide-react";

const OrdersHeader = ({ orderCount }) => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff8f1] via-white to-orange-50 px-5 py-7 shadow-[0_16px_45px_rgba(88,47,27,0.06)] sm:px-8 sm:py-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-red-100/50 blur-3xl" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-lg shadow-red-100">
            <Package size={27} strokeWidth={2.2} />
          </div>

          <div>
            <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#f97316]">
              Delivery Center
            </p>

            <h1 className="text-2xl font-black tracking-tight text-[#3d2922] sm:text-3xl">
              My Orders
            </h1>

            <p className="mt-1.5 max-w-xl text-sm leading-6 text-[#8c7468]">
              View and manage the orders assigned to you.
            </p>
          </div>
        </div>

        {/* Order Count */}
        <div className="flex w-fit items-center gap-3 rounded-2xl border border-orange-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
            <Truck size={18} />
          </div>

          <div>
            <p className="text-lg font-black leading-none text-[#3d2922]">
              {orderCount}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#a8958b]">
              Total Orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersHeader;