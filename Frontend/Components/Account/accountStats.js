"use client";

import {
  CheckCircle2,
  Clock3,
  ShoppingBag,
  Truck,
} from "lucide-react";

const AccountStats = ({ statistics }) => {
  const stats = [
    {
      label: "Total Orders",
      value: statistics?.totalOrders || 0,
      icon: ShoppingBag,
    },
    {
      label: "Active Orders",
      value: statistics?.activeOrders || 0,
      icon: Clock3,
    },
    {
      label: "Delivered",
      value: statistics?.deliveredOrders || 0,
      icon: CheckCircle2,
    },
    {
      label: "Out for Delivery",
      value: statistics?.outForDeliveryOrders || 0,
      icon: Truck,
    },
  ];

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#a58b7d]">
          Your activity
        </p>

        <h2 className="mt-1 text-xl font-black text-[#3d2922]">
          Order overview
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-orange-100 bg-white p-4 shadow-[0_12px_35px_rgba(88,47,27,0.05)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
                <Icon size={19} />
              </div>

              <p className="mt-4 text-2xl font-black text-[#3d2922]">
                {stat.value}
              </p>

              <p className="mt-1 text-xs font-bold leading-5 text-[#8c7468]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccountStats;