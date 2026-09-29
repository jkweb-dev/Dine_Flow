"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Truck,
  X,
  Utensils,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navigation = [
    {
      label: "Dashboard",
      href: "/deliveryBoys",
      icon: LayoutDashboard,
    },
    {
      label: "My Orders",
      href: "/deliveryBoys/orders",
      icon: Package,
    },
    {
      label: "Active Delivery",
      href: "/deliveryBoys/active",
      icon: Truck,
    },
  ];

  const isActive = (href) => {
    if (href === "/deliveryBoys") {
      return pathname === "/deliveryBoys";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-orange-100 bg-white shadow-[8px_0_35px_rgba(88,47,27,0.08)] transition-transform duration-300 ease-in-out lg:translate-x-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-orange-100 px-5">
          <Link
            href="/deliveryBoys"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c92a2a] text-white shadow-lg shadow-red-100">
              <Utensils size={21} strokeWidth={2.3} />
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-[#3d2922]">
                Dine<span className="text-[#c92a2a]">Flow</span>
              </p>

              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#a8958b]">
                Delivery Panel
              </p>
            </div>
          </Link>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#8c7468] transition hover:bg-red-50 hover:text-[#c92a2a] lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#b1a198]">
            Menu
          </p>

          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 transition-all duration-200 ${
                    active
                      ? "bg-[#c92a2a] text-white shadow-lg shadow-red-100"
                      : "text-[#6f5a50] hover:bg-[#fff8f1] hover:text-[#c92a2a]"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active
                        ? "bg-white/15"
                        : "bg-[#fff8f1] group-hover:bg-red-50"
                    }`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2.2}
                    />
                  </div>

                  <span className="text-sm font-bold">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Branding */}
        <div className="shrink-0 border-t border-orange-100 p-4">
          <div className="rounded-2xl bg-[#fff8f1] p-4">
            <div className="flex items-center gap-2">
              <Truck
                size={17}
                className="text-[#f97316]"
              />

              <p className="text-xs font-black text-[#5f493f]">
                Delivery Team
              </p>
            </div>

            <p className="mt-1 text-[10px] font-medium leading-4 text-[#9b867b]">
              Manage your assigned deliveries quickly and easily.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;