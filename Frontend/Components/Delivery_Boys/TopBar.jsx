"use client";

import { Menu, Bell, UserRound } from "lucide-react";
import { useAuth } from "@/src/context/authProvider";

const Topbar = ({ onMenuClick }) => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-orange-100 bg-white/90 px-4 shadow-[0_4px_20px_rgba(88,47,27,0.04)] backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex min-w-0 items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-[#fffaf6] text-[#5f493f] transition hover:border-orange-200 hover:text-[#c92a2a] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <div className="min-w-0">
          <p className="truncate text-sm font-black text-[#3d2922] sm:text-base">
            Delivery Center
          </p>

          <p className="hidden text-[11px] font-medium text-[#9b867b] sm:block">
            Manage your deliveries
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-3">
        

        {/* User */}
        <div className="flex items-center gap-2 rounded-xl border border-orange-100 bg-[#fffaf6] px-2 py-1.5 sm:gap-3 sm:px-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c92a2a] text-white">
            <UserRound size={16} />
          </div>

          <div className="hidden min-w-0 sm:block">
            <p className="max-w-[120px] truncate text-xs font-black text-[#3d2922]">
              {user?.name || "Delivery Boy"}
            </p>

            <p className="text-[9px] font-bold uppercase tracking-wide text-[#9b867b]">
              Delivery Boy
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;