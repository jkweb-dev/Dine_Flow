"use client";

import {
  ClipboardList,
  Clock3,
  CircleCheck,
  Bike,
  PackageCheck,
  UserRound,
} from "lucide-react";

const OrderStats = ({ statistics }) => {
  const stats = [
    {
      label: "All Orders",
      value: statistics?.totalOrders || 0,
      icon: ClipboardList,
      description: "Total orders",
      iconBg: "bg-red-50",
      iconColor: "text-[#c92a2a]",
    },
    {
      label: "Pending",
      value: statistics?.pendingOrders || 0,
      icon: Clock3,
      description: "Awaiting confirmation",
      iconBg: "bg-orange-50",
      iconColor: "text-[#f97316]",
    },
    {
      label: "Active",
      value: statistics?.activeOrders || 0,
      icon: CircleCheck,
      description: "Currently in progress",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Unassigned",
      value: statistics?.unassignedOrders || 0,
      icon: UserRound,
      description: "Need delivery boy",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      label: "Out for Delivery",
      value: statistics?.outForDeliveryOrders || 0,
      icon: Bike,
      description: "On the way",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      label: "Delivered",
      value: statistics?.deliveredOrders || 0,
      icon: PackageCheck,
      description: "Successfully completed",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="group rounded-[1.5rem] border border-orange-100 bg-white p-4 shadow-[0_12px_35px_rgba(88,47,27,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,47,27,0.08)] sm:p-5"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
            >
              <Icon
                size={21}
                strokeWidth={2.2}
                className={stat.iconColor}
              />
            </div>

            <p className="mt-4 text-2xl font-black tracking-tight text-[#3d2922]">
              {stat.value}
            </p>

            <p className="mt-1 text-sm font-extrabold text-[#5f493f]">
              {stat.label}
            </p>

            <p className="mt-1 text-[11px] font-medium leading-4 text-[#9b867b]">
              {stat.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default OrderStats;