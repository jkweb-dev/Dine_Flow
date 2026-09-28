"use client";

import {
  Plus,
  ShoppingBag,
  Tag,
  Bike,
  Users,
  ArrowUpRight,
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      label: "Add Product",
      description: "Create menu item",
      href: "/admin/products",
      icon: Plus,
      className: "bg-red-50 text-[#c92a2a]",
    },
    {
      label: "Manage Orders",
      description: "View all orders",
      href: "/admin/orders",
      icon: ShoppingBag,
      className: "bg-orange-50 text-[#f97316]",
    },
    {
      label: "Manage Deals",
      description: "Update offers",
      href: "/admin/deals",
      icon: Tag,
      className: "bg-purple-50 text-purple-600",
    },
    {
      label: "Delivery Boys",
      description: "Manage delivery team",
      href: "/admin/delivery-boys",
      icon: Bike,
      className: "bg-blue-50 text-blue-600",
    },
    {
      label: "Customers",
      description: "View customers",
      href: "/admin/customers",
      icon: Users,
      className: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_14px_40px_rgba(88,47,27,0.05)] sm:p-6">
      <div>
        <h2 className="text-base font-black text-[#3d2922]">
          Quick Actions
        </h2>

        <p className="mt-1 text-xs font-medium text-[#9b867b]">
          Jump directly to important areas
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <a
              href={action.href}
              key={action.label}
              className="group rounded-2xl border border-orange-50 p-3.5 transition hover:-translate-y-0.5 hover:border-orange-100 hover:bg-[#fffaf6]"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${action.className}`}
                >
                  <Icon size={18} />
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-[#b6a69e] transition group-hover:text-[#c92a2a]"
                />
              </div>

              <p className="mt-3 text-xs font-black text-[#5f493f]">
                {action.label}
              </p>

              <p className="mt-1 text-[10px] font-medium text-[#9b867b]">
                {action.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;