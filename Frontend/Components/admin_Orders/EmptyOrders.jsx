"use client";

import {
  ClipboardList,
  SearchX,
  RotateCcw,
} from "lucide-react";

const EmptyOrders = ({ hasFilters, onClearFilters }) => {
  const Icon = hasFilters ? SearchX : ClipboardList;

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white px-5 py-14 text-center shadow-[0_14px_40px_rgba(88,47,27,0.05)] sm:px-8 sm:py-20">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-[#f97316]">
        <Icon size={29} strokeWidth={2} />
      </div>

      <h2 className="mt-5 text-xl font-black tracking-tight text-[#3d2922]">
        {hasFilters
          ? "No matching orders"
          : "No orders yet"}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm font-medium leading-6 text-[#9b867b]">
        {hasFilters
          ? "We couldn't find any orders matching your current search or filters. Try changing your filters and search again."
          : "Customer orders will appear here as soon as they are placed."}
      </p>

      {hasFilters && (
        <button
          type="button"
          onClick={onClearFilters}
          className="mx-auto mt-6 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 text-sm font-extrabold text-white shadow-lg shadow-red-100 transition hover:bg-[#b82424] active:scale-[0.99]"
        >
          <RotateCcw size={16} />

          Clear Filters
        </button>
      )}
    </section>
  );
};

export default EmptyOrders;