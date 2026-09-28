"use client";

import { Activity, Utensils } from "lucide-react";

const Header = () => {
  const today = new Date().toLocaleDateString("en-PK", {
    timeZone: "Asia/Karachi",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff8f1] via-white to-orange-50 px-5 py-7 shadow-[0_20px_60px_rgba(88,47,27,0.08)] sm:px-8 sm:py-9">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-red-100/60 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
        {/* Left Content */}
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-xl shadow-red-200">
            <Utensils
              size={27}
              strokeWidth={2.2}
            />
          </div>

          <div>
            <div className="mb-1 flex items-center gap-2">
              <Activity
                size={14}
                className="text-[#f97316]"
              />

              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#f97316]">
                DineFlow Control Center
              </span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-[#3d2922] sm:text-3xl lg:text-4xl">
              Welcome back, Admin
            </h1>

            <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-[#8c7468]">
              Here's your complete restaurant overview.
              Monitor orders, deliveries, customers,
              revenue, and everything that needs your
              attention.
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="rounded-2xl border border-orange-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#a8958b]">
            Today
          </p>

          <p className="mt-1 text-sm font-black text-[#3d2922]">
            {today}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;