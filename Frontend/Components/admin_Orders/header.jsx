"use client";

import { ClipboardList, Utensils } from "lucide-react";

const Header = ({ orderCount }) => {
  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff8f1] via-white to-orange-50 px-5 py-7 shadow-[0_18px_55px_rgba(88,47,27,0.07)] sm:px-8 sm:py-9">
      
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-red-100/60 blur-3xl" />

      <div className="relative flex items-start gap-4">

        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-lg shadow-red-200">
          <ClipboardList size={27} strokeWidth={2.2} />
        </div>

        {/* Content */}
        <div className="min-w-0">

          {/* Small label */}
          <div className="mb-1 flex items-center gap-2">
            <Utensils
              size={15}
              className="text-[#f97316]"
            />

            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f97316]">
              DineFlow Admin
            </span>
          </div>

          {/* Title + count */}
          <div className="flex flex-wrap items-center gap-3">

            <h1 className="text-2xl font-black tracking-tight text-[#3d2922] sm:text-3xl">
              Orders
            </h1>

            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#8c7468] shadow-sm ring-1 ring-orange-100">
              {orderCount} {orderCount === 1 ? "order" : "orders"}
            </span>

          </div>

          {/* Description */}
          <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-[#8c7468]">
            Manage customer orders, update order status, and keep track of
            delivery assignments from one place.
          </p>

        </div>
      </div>
    </header>
  );
};

export default Header;