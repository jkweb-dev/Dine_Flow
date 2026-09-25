"use client";

import {
  ChevronRight,
  CalendarDays,
  Phone,
  ShoppingBag,
} from "lucide-react";

const CustomerCard = ({ customer, onSelectCustomer }) => {
  const joinedDate = new Date(
    customer.createdAt
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <button
      type="button"
      onClick={() => onSelectCustomer(customer)}
      className="group w-full rounded-[1.5rem] border border-orange-100 bg-white p-4 text-left shadow-[0_12px_35px_rgba(88,47,27,0.05)] transition active:scale-[0.99] sm:p-5 lg:hidden"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-base font-black text-[#c92a2a]">
            {customer.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-black text-[#3d2922]">
              {customer.name}
            </h3>

            <p className="mt-0.5 text-[11px] font-bold text-[#a58b7d]">
              {customer.userId}
            </p>
          </div>
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff4ec] text-[#c45b17] transition group-hover:bg-orange-100">
          <ChevronRight size={17} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#fffaf6] p-3">
          <div className="flex items-center gap-1.5">
            <Phone size={13} className="text-[#f97316]" />

            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
              Phone
            </span>
          </div>

          <p className="mt-1 truncate text-xs font-black text-[#5d4035]">
            {customer.phone}
          </p>
        </div>

        <div className="rounded-xl bg-[#fffaf6] p-3">
          <div className="flex items-center gap-1.5">
            <ShoppingBag size={13} className="text-[#f97316]" />

            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
              Orders
            </span>
          </div>

          <p className="mt-1 text-xs font-black text-[#5d4035]">
            {customer.totalOrders}
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-xl bg-[#fffaf6] px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <CalendarDays size={13} className="text-[#f97316]" />

          <span className="text-[10px] font-bold text-[#a58b7d]">
            Joined {joinedDate}
          </span>
        </div>

        <span className="text-xs font-black text-[#c92a2a]">
          Rs. {customer.totalSpent.toLocaleString()}
        </span>
      </div>
    </button>
  );
};

export default CustomerCard;