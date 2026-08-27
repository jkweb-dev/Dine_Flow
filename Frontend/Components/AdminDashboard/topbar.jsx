"use client";

import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  UserRound,
} from "lucide-react";

const Topbar = ({
  user,
  onMenuClick,
}) => {
  const roleLabel =
    user?.role === "admin"
      ? "Administrator"
      : user?.role === "deliveryBoy"
      ? "Delivery Partner"
      : "Customer";

  return (
    <header className="sticky top-0 z-30 flex h-[76px] shrink-0 items-center justify-between border-b border-[#eadfd7] bg-[#fffaf6]/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      
      {/* ================= LEFT ================= */}
      <div className="flex min-w-0 items-center gap-3">

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#eadfd7] bg-white text-[#756b65] shadow-sm transition hover:border-[#f97316] hover:bg-[#fff5ed] hover:text-[#c92a2a] lg:hidden"
        >
          <Menu size={21} />
        </button>

        {/* Page heading */}
        <div className="min-w-0">
          <p className="hidden text-xs font-semibold text-[#a39a94] sm:block">
            Welcome back
          </p>

          <h1 className="truncate text-lg font-black tracking-tight text-[#241b16] sm:text-xl">
            DineFlow
          </h1>
        </div>
      </div>


      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Search */}
        <button
          type="button"
          aria-label="Search"
          className="hidden h-10 w-10 items-center justify-center rounded-xl text-[#756b65] transition hover:bg-[#f9eee7] hover:text-[#c92a2a] sm:flex"
        >
          <Search size={19} />
        </button>


        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[#756b65] transition hover:bg-[#f9eee7] hover:text-[#c92a2a]"
        >
          <Bell size={19} />

          {/* Notification indicator */}
          <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-[#fffaf6] bg-[#f97316]" />
        </button>


        {/* Divider */}
        <div className="mx-1 hidden h-8 w-px bg-[#eadfd7] sm:block" />


        {/* User */}
        <button
          type="button"
          className="group flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-[#f9eee7] sm:gap-3"
        >
          {/* Avatar */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#c92a2a] text-sm font-black text-white shadow-sm">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          {/* User information */}
          <div className="hidden min-w-0 text-left sm:block">
            <p className="max-w-[130px] truncate text-sm font-bold text-[#241b16]">
              {user?.name || "User"}
            </p>

            <p className="text-[11px] font-medium text-[#a39a94]">
              {roleLabel}
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-[#a39a94] transition-transform group-hover:text-[#c92a2a] sm:block"
          />
        </button>

      </div>
    </header>
  );
};

export default Topbar;