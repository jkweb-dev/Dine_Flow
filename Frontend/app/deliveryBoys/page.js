"use client";

import Link from "next/link";
import {
  Bike,
  Package,
  Truck,
  ArrowRight,
  Phone,
  UserRound,
} from "lucide-react";

import { useAuth } from "@/src/context/authProvider";

const DeliveryDashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-full bg-[#fffaf6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#c92a2a] via-[#df3b2f] to-[#f97316] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10" />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">

            {/* Welcome Text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Truck size={17} />
                Delivery Dashboard
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Welcome, {user?.name || "Delivery Boy"}!
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                Everything you need for your deliveries is right here.
                Check your orders, manage active deliveries, and keep things
                moving smoothly.
              </p>

              {/* User Details */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                  <UserRound size={17} />
                  <div>
                    <p className="text-[11px] text-white/70">Name</p>
                    <p className="text-sm font-semibold">
                      {user?.name || "Not available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                  <Phone size={17} />
                  <div>
                    <p className="text-[11px] text-white/70">Phone</p>
                    <p className="text-sm font-semibold">
                      {user?.phone || "Not available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                  <Truck size={17} />
                  <div>
                    <p className="text-[11px] text-white/70">Role</p>
                    <p className="text-sm font-semibold">
                      Delivery Boy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Delivery Boy Icon */}
            <div className="flex justify-center md:justify-end">
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-white/15 shadow-2xl backdrop-blur-md sm:h-60 sm:w-60">

                <div className="absolute inset-4 rounded-full border border-white/20" />

                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-2xl sm:h-44 sm:w-44">
                  <Bike
                    size={95}
                    strokeWidth={1.5}
                    className="text-[#c92a2a]"
                  />
                </div>

                {/* Small badge */}
                <div className="absolute bottom-4 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff8f1] shadow-lg">
                  <Truck
                    size={22}
                    className="text-[#f97316]"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Action Section */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              What would you like to do?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose an option below to get started.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* My Orders */}
            <Link
              href="/deliveryBoys/orders"
              className="group rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#f97316] transition-transform duration-300 group-hover:scale-110">
                  <Package size={28} />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-orange-50 group-hover:text-[#f97316]">
                  <ArrowRight size={20} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                My Orders
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                View all orders assigned to you, including completed
                deliveries and your previous delivery history.
              </p>

              <div className="mt-5 text-sm font-semibold text-[#f97316]">
                View order history →
              </div>
            </Link>

            {/* Active Orders */}
            <Link
              href="/deliveryBoys/active"
              className="group rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#c92a2a] transition-transform duration-300 group-hover:scale-110">
                  <Truck size={28} />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-red-50 group-hover:text-[#c92a2a]">
                  <ArrowRight size={20} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Active Orders
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                See the deliveries currently assigned to you and start or
                complete them when you are ready.
              </p>

              <div className="mt-5 text-sm font-semibold text-[#c92a2a]">
                Manage active deliveries →
              </div>
            </Link>

          </div>
        </section>

        {/* Bottom Message */}
        <div className="mt-8 rounded-2xl border border-orange-100 bg-[#fff8f1] px-5 py-4 text-center">
          <p className="text-sm font-medium text-gray-600">
            🚴 Stay safe, deliver with care, and keep our customers happy!
          </p>
        </div>

      </div>
    </div>
  );
};

export default DeliveryDashboardPage;