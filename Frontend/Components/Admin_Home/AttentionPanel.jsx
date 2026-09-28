"use client";

import {
  AlertTriangle,
  Clock3,
  UserRoundX,
  PackageX,
  ArrowRight,
} from "lucide-react";

const AttentionPanel = ({ alerts }) => {
  const items = [
    {
      label: "Pending Orders",
      value: alerts?.pendingOrders || 0,
      description: "Orders waiting for confirmation",
      icon: Clock3,
      href: "/admin/orders",
      className: "bg-orange-50 text-orange-600",
    },
    {
      label: "Unassigned Orders",
      value: alerts?.unassignedOrders || 0,
      description: "Orders without a delivery boy",
      icon: UserRoundX,
      href: "/admin/orders",
      className: "bg-red-50 text-red-600",
    },
    {
      label: "Unavailable Products",
      value: alerts?.unavailableProducts || 0,
      description: "Products currently unavailable",
      icon: PackageX,
      href: "/admin/products",
      className: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_14px_40px_rgba(88,47,27,0.05)] sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
          <AlertTriangle
            size={20}
            className="text-[#c92a2a]"
          />
        </div>

        <div>
          <h2 className="text-base font-black text-[#3d2922]">
            Needs Attention
          </h2>

          <p className="mt-1 text-xs font-medium text-[#9b867b]">
            Things that may require your action
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <a
              href={item.href}
              key={item.label}
              className="group flex items-center gap-3 rounded-2xl border border-orange-50 p-3.5 transition hover:border-orange-100 hover:bg-[#fffaf6]"
            >
              {/* Icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.className}`}
              >
                <Icon size={18} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-extrabold text-[#5f493f]">
                  {item.label}
                </p>

                <p className="mt-0.5 truncate text-[10px] font-medium text-[#9b867b]">
                  {item.description}
                </p>
              </div>

              {/* Count + Arrow */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-[#3d2922]">
                  {item.value}
                </span>

                <ArrowRight
                  size={15}
                  className="text-[#b6a69e] transition group-hover:translate-x-1 group-hover:text-[#c92a2a]"
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default AttentionPanel;