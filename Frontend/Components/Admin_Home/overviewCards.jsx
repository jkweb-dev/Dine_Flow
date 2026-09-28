"use client";

import {
  ShoppingBag,
  Banknote,
  PackageCheck,
  Truck,
  Users,
  Bike,
  TrendingUp,
} from "lucide-react";

const OverviewCards = ({ overview }) => {
  const cards = [
    {
      label: "Today's Orders",
      value: overview?.todayOrders || 0,
      description: "Orders received today",
      icon: ShoppingBag,
      iconBg: "bg-red-50",
      iconColor: "text-[#c92a2a]",
    },
    {
      label: "Today's Revenue",
      value: `Rs. ${Number(
        overview?.todayRevenue || 0
      ).toLocaleString()}`,
      description: "Revenue from today's orders",
      icon: Banknote,
      iconBg: "bg-orange-50",
      iconColor: "text-[#f97316]",
    },
    {
      label: "Active Orders",
      value: overview?.activeOrders || 0,
      description: "Currently in progress",
      icon: PackageCheck,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Delivered Today",
      value: overview?.deliveredToday || 0,
      description: "Successfully completed",
      icon: Truck,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: "Customers",
      value: overview?.totalCustomers || 0,
      description: "Registered customers",
      icon: Users,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      label: "Delivery Boys",
      value: overview?.totalDeliveryBoys || 0,
      description: `${overview?.activeDeliveryBoys || 0} currently handling orders`,
      icon: Bike,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="group relative overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white p-4 shadow-[0_12px_35px_rgba(88,47,27,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(88,47,27,0.1)] sm:p-5"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-orange-50/70 transition duration-300 group-hover:scale-125" />

            <div className="relative">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}
              >
                <Icon
                  size={21}
                  strokeWidth={2.2}
                  className={card.iconColor}
                />
              </div>

              <p className="mt-5 truncate text-2xl font-black tracking-tight text-[#3d2922]">
                {card.value}
              </p>

              <p className="mt-1 text-xs font-black text-[#5f493f]">
                {card.label}
              </p>

              <p className="mt-1 text-[10px] font-medium leading-4 text-[#9b867b]">
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default OverviewCards;