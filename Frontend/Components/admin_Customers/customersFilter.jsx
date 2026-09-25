"use client";

import { ArrowDownUp, Search, SlidersHorizontal, X } from "lucide-react";

const CustomerFilters = ({
  search,
  setSearch,
  sort,
  setSort,
}) => {
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-4 shadow-[0_12px_35px_rgba(88,47,27,0.05)] sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
          <SlidersHorizontal size={17} />
        </div>

        <div>
          <h2 className="text-sm font-black text-[#3d2922]">
            Find customers
          </h2>

          <p className="text-[11px] font-medium text-[#a58b7d]">
            Search or organize your customer list
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_220px]">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#b99b8b]"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, user ID, or phone..."
            className="h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] pl-11 pr-10 text-sm font-semibold text-[#3d2922] outline-none placeholder:text-[#b9a196] focus:border-[#f97316] focus:ring-4 focus:ring-orange-100"
          />

          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-[#a58b7d] transition hover:bg-orange-100 hover:text-[#c92a2a]"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <ArrowDownUp
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#f97316]"
          />

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-orange-100 bg-[#fffaf6] pl-11 pr-4 text-sm font-bold text-[#5d4035] outline-none focus:border-[#f97316] focus:ring-4 focus:ring-orange-100"
          >
            <option value="newest">Newest customers</option>
            <option value="oldest">Oldest customers</option>
            <option value="most_orders">Most orders</option>
            <option value="highest_spending">Highest spending</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default CustomerFilters;