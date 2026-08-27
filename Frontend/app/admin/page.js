"use client";

import {
  ArrowUpRight,
  Clock3,
  Package,
  ShoppingBag,
  TrendingUp,
  Truck,
  Users,
  CheckCircle2,
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <section>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-sm font-bold text-[#f97316]">
              Restaurant overview
            </p>

            <h1 className="text-3xl font-black tracking-tight text-[#241b16]">
              Good evening 👋
            </h1>

            <p className="mt-2 text-sm text-[#756b65]">
              Here's what's happening with your restaurant today.
            </p>
          </div>

          <div className="rounded-xl border border-[#eadfd7] bg-white px-4 py-2.5 text-sm font-semibold text-[#756b65] shadow-sm">
            Wednesday, Aug 26
          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Orders */}
        <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
              <ShoppingBag size={21} />
            </div>

            <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
              <TrendingUp size={13} />
              12.5%
            </span>
          </div>

          <p className="mt-5 text-sm font-semibold text-[#a39a94]">
            Today's Orders
          </p>

          <h2 className="mt-1 text-3xl font-black text-[#241b16]">
            128
          </h2>
        </div>


        {/* Revenue */}
        <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff5e8] text-[#f97316]">
              <TrendingUp size={21} />
            </div>

            <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
              +8.4%
            </span>
          </div>

          <p className="mt-5 text-sm font-semibold text-[#a39a94]">
            Today's Revenue
          </p>

          <h2 className="mt-1 text-3xl font-black text-[#241b16]">
            Rs. 84,520
          </h2>
        </div>


        {/* Customers */}
        <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
              <Users size={21} />
            </div>

            <span className="rounded-full bg-[#fff5e8] px-2.5 py-1 text-xs font-bold text-[#f97316]">
              +24
            </span>
          </div>

          <p className="mt-5 text-sm font-semibold text-[#a39a94]">
            Total Customers
          </p>

          <h2 className="mt-1 text-3xl font-black text-[#241b16]">
            2,481
          </h2>
        </div>


        {/* Delivery */}
        <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff5e8] text-[#f97316]">
              <Truck size={21} />
            </div>

            <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
              Active
            </span>
          </div>

          <p className="mt-5 text-sm font-semibold text-[#a39a94]">
            Delivery Boys
          </p>

          <h2 className="mt-1 text-3xl font-black text-[#241b16]">
            12
          </h2>
        </div>

      </section>


      {/* ================= MAIN GRID ================= */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Orders */}
        <div className="overflow-hidden rounded-2xl border border-[#eadfd7] bg-white shadow-sm xl:col-span-2">

          <div className="flex items-center justify-between border-b border-[#eadfd7] px-5 py-5 sm:px-6">
            <div>
              <h2 className="text-lg font-black text-[#241b16]">
                Recent Orders
              </h2>

              <p className="mt-1 text-xs text-[#a39a94]">
                Your latest restaurant orders
              </p>
            </div>

            <button
              type="button"
              className="text-xs font-bold text-[#c92a2a] hover:text-[#f97316]"
            >
              View all
            </button>
          </div>


          {/* Orders */}
          <div className="divide-y divide-[#f0e5dd]">

            {/* Order 1 */}
            <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                <ShoppingBag size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  #DF-1028
                </p>

                <p className="mt-1 truncate text-xs text-[#a39a94]">
                  Ali Khan • 3 items
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-black text-[#241b16]">
                  Rs. 2,450
                </p>

                <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-green-600">
                  <CheckCircle2 size={12} />
                  Delivered
                </span>
              </div>
            </div>


            {/* Order 2 */}
            <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff5e8] text-[#f97316]">
                <Package size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  #DF-1027
                </p>

                <p className="mt-1 truncate text-xs text-[#a39a94]">
                  Ahmed Raza • 2 items
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-black text-[#241b16]">
                  Rs. 1,850
                </p>

                <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#f97316]">
                  <Clock3 size={12} />
                  Preparing
                </span>
              </div>
            </div>


            {/* Order 3 */}
            <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                <Truck size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  #DF-1026
                </p>

                <p className="mt-1 truncate text-xs text-[#a39a94]">
                  Hamza Ali • 4 items
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-black text-[#241b16]">
                  Rs. 3,200
                </p>

                <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                  <Truck size={12} />
                  On the way
                </span>
              </div>
            </div>

          </div>
        </div>


        {/* ================= QUICK ACTIONS ================= */}
        <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5">
            <h2 className="text-lg font-black text-[#241b16]">
              Quick Actions
            </h2>

            <p className="mt-1 text-xs text-[#a39a94]">
              Manage your restaurant quickly
            </p>
          </div>


          <div className="space-y-3">

            <button
              type="button"
              className="group flex w-full items-center gap-3 rounded-xl border border-[#f0e2d8] p-3.5 text-left transition hover:border-[#f97316] hover:bg-[#fff8f1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                <Package size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  Add Product
                </p>

                <p className="mt-0.5 text-xs text-[#a39a94]">
                  Add a new menu item
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-[#a39a94] transition group-hover:text-[#c92a2a]"
              />
            </button>


            <button
              type="button"
              className="group flex w-full items-center gap-3 rounded-xl border border-[#f0e2d8] p-3.5 text-left transition hover:border-[#f97316] hover:bg-[#fff8f1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5e8] text-[#f97316]">
                <ShoppingBag size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  View Orders
                </p>

                <p className="mt-0.5 text-xs text-[#a39a94]">
                  Manage incoming orders
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-[#a39a94] transition group-hover:text-[#c92a2a]"
              />
            </button>


            <button
              type="button"
              className="group flex w-full items-center gap-3 rounded-xl border border-[#f0e2d8] p-3.5 text-left transition hover:border-[#f97316] hover:bg-[#fff8f1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                <Users size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  Customers
                </p>

                <p className="mt-0.5 text-xs text-[#a39a94]">
                  View your customers
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-[#a39a94] transition group-hover:text-[#c92a2a]"
              />
            </button>


            <button
              type="button"
              className="group flex w-full items-center gap-3 rounded-xl border border-[#f0e2d8] p-3.5 text-left transition hover:border-[#f97316] hover:bg-[#fff8f1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5e8] text-[#f97316]">
                <Truck size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-[#241b16]">
                  Delivery Team
                </p>

                <p className="mt-0.5 text-xs text-[#a39a94]">
                  Manage delivery boys
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-[#a39a94] transition group-hover:text-[#c92a2a]"
              />
            </button>

          </div>
        </div>

      </section>


      {/* ================= BOTTOM WELCOME CARD ================= */}
      <section className="relative overflow-hidden rounded-2xl bg-[#c92a2a] p-6 shadow-lg sm:p-8">

        {/* Decorative circles */}
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#f97316]/30" />
        <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#f97316]/20" />

        <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

          <div className="max-w-xl">
            <p className="text-sm font-bold text-[#ffd166]">
              DineFlow Control Center
            </p>

            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Everything your restaurant needs, in one place.
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/75">
              Manage products, orders, customers and delivery operations
              from your restaurant dashboard.
            </p>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-xl">
            🍔
          </div>

        </div>
      </section>

    </div>
  );
};

export default DashboardPage;