"use client";

import {
  Search,
  SlidersHorizontal,
  ArrowDownUp,
  Bike,
  X,
} from "lucide-react";

const OrderFilters = ({
  search,
  setSearch,
  status,
  setStatus,
  deliveryBoy,
  setDeliveryBoy,
  sort,
  setSort,
  deliveryBoys,
}) => {
  const hasFilters =
    search.trim() ||
    status !== "all" ||
    deliveryBoy !== "all" ||
    sort !== "newest";

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setDeliveryBoy("all");
    setSort("newest");
  };

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-4 shadow-[0_14px_40px_rgba(88,47,27,0.05)] sm:p-5">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
          <SlidersHorizontal
            size={19}
            className="text-[#f97316]"
          />
        </div>

        <div>
          <h2 className="text-sm font-black text-[#3d2922]">
            Find Orders
          </h2>

          <p className="text-xs font-medium text-[#9b867b]">
            Search and filter your orders
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_1fr_1fr_1fr_auto]">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a8958b]"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search order, customer, phone..."
            className="h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] pl-11 pr-4 text-sm font-semibold text-[#3d2922] outline-none transition placeholder:text-[#b6a69e] focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Status */}
        <div className="relative">
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-orange-100 bg-[#fffaf6] px-4 pr-10 text-sm font-bold text-[#5f493f] outline-none transition focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="assigned">Assigned</option>
            <option value="out_for_delivery">
              Out for Delivery
            </option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Delivery Boy */}
        <div className="relative">
          <Bike
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a8958b]"
          />

          <select
            value={deliveryBoy}
            onChange={(event) => setDeliveryBoy(event.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-orange-100 bg-[#fffaf6] px-4 pl-10 pr-10 text-sm font-bold text-[#5f493f] outline-none transition focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
          >
            <option value="all">All Delivery Boys</option>

            <option value="unassigned">
              Unassigned
            </option>

            {deliveryBoys.map((boy) => (
              <option
                key={boy._id}
                value={boy._id}
              >
                {boy.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="relative">
          <ArrowDownUp
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a8958b]"
          />

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-orange-100 bg-[#fffaf6] px-4 pl-10 pr-10 text-sm font-bold text-[#5f493f] outline-none transition focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest_total">
              Highest Total
            </option>
            <option value="lowest_total">
              Lowest Total
            </option>
          </select>
        </div>

        {/* Clear */}
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 text-sm font-extrabold text-[#c92a2a] transition hover:bg-red-100"
          >
            <X size={17} />
            Clear
          </button>
        )}
      </div>
    </section>
  );
};

export default OrderFilters;