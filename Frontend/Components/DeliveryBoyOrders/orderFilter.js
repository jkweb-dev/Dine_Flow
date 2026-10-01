"use client";

import {
  ListFilter,
  Clock3,
  Truck,
  CheckCircle2,
} from "lucide-react";

const OrderFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    {
      value: "all",
      label: "All",
      icon: ListFilter,
    },
    {
      value: "assigned",
      label: "Assigned",
      icon: Clock3,
    },
    {
      value: "out_for_delivery",
      label: "Out for Delivery",
      icon: Truck,
    },
    {
      value: "delivered",
      label: "Delivered",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="rounded-[1.5rem] border border-orange-100 bg-white p-2 shadow-[0_10px_35px_rgba(88,47,27,0.05)]">
      <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none ">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onFilterChange(filter.value)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition-all duration-200 sm:px-5 ${
                active
                  ? "bg-[#c92a2a] text-white shadow-md shadow-red-100"
                  : "text-[#806d63] hover:bg-[#fff8f1] hover:text-[#c92a2a]"
              }`}
            >
              <Icon size={16} strokeWidth={2.3} />

              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OrderFilters;