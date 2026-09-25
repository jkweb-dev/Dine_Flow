"use client";

import {
  ShoppingBag,
  UserPlus,
  UsersRound,
  Activity,
} from "lucide-react";

const CustomerStats = ({ statistics }) => {
  const stats = [
    {
      label: "Total Customers",
      value: statistics?.totalCustomers || 0,
      icon: UsersRound,
      description: "Registered customers",
    },
    {
      label: "Active Customers",
      value: statistics?.activeCustomers || 0,
      icon: Activity,
      description: "Customers with active orders",
    },
    {
      label: "New Customers",
      value: statistics?.newCustomers || 0,
      icon: UserPlus,
      description: "Joined in last 30 days",
    },
    {
      label: "Total Orders",
      value: statistics?.totalOrders || 0,
      icon: ShoppingBag,
      description: "Orders from customers",
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#a58b7d]">
          Customer overview
        </p>

        <h2 className="mt-1 text-xl font-black text-[#3d2922]">
          Customer activity
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-orange-100 bg-white p-4 shadow-[0_12px_35px_rgba(88,47,27,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,47,27,0.07)] sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
                  <Icon size={19} />
                </div>
              </div>

              <p className="mt-4 text-2xl font-black tracking-tight text-[#3d2922] sm:text-3xl">
                {stat.value.toLocaleString()}
              </p>

              <p className="mt-1 text-xs font-black text-[#5d4035]">
                {stat.label}
              </p>

              <p className="mt-1 text-[10px] font-medium leading-4 text-[#a58b7d]">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerStats;