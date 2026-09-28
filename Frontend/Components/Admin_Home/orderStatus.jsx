"use client";

import {
  Clock3,
  CircleCheck,
  UserRoundCheck,
  Bike,
  PackageCheck,
  XCircle,
  Ban,
} from "lucide-react";

const OrderStatus = ({ stats }) => {
  const items = [
    {
      label: "Pending",
      value: stats?.pending || 0,
      icon: Clock3,
      className: "text-orange-600 bg-orange-50",
    },
    {
      label: "Confirmed",
      value: stats?.confirmed || 0,
      icon: CircleCheck,
      className: "text-blue-600 bg-blue-50",
    },
    {
      label: "Assigned",
      value: stats?.assigned || 0,
      icon: UserRoundCheck,
      className: "text-purple-600 bg-purple-50",
    },
    {
      label: "Out for Delivery",
      value: stats?.outForDelivery || 0,
      icon: Bike,
      className: "text-amber-600 bg-amber-50",
    },
    {
      label: "Delivered",
      value: stats?.delivered || 0,
      icon: PackageCheck,
      className: "text-green-600 bg-green-50",
    },
    {
      label: "Cancelled",
      value: stats?.cancelled || 0,
      icon: XCircle,
      className: "text-red-600 bg-red-50",
    },
    {
      label: "Rejected",
      value: stats?.rejected || 0,
      icon: Ban,
      className: "text-red-700 bg-red-50",
    },
  ];

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_14px_40px_rgba(88,47,27,0.05)] sm:p-6">
      <div>
        <h2 className="text-base font-black text-[#3d2922]">
          Order Status
        </h2>

        <p className="mt-1 text-xs font-medium text-[#9b867b]">
          Current order distribution
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-orange-50 p-3 transition hover:bg-[#fffaf6]"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.className}`}
              >
                <Icon size={17} />
              </div>

              <p className="min-w-0 flex-1 truncate text-xs font-bold text-[#5f493f]">
                {item.label}
              </p>

              <p className="text-sm font-black text-[#3d2922]">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OrderStatus;