"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChefHat,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Gift,
  Truck,
  Users,
  Settings,
  LogOut,
  X,
  UtensilsCrossed,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({
  user,
  isOpen = false,
  onClose,
  onLogout,
}) => {
  const pathname = usePathname();

  const role = user?.role;

  const adminNavigation = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Orders",
      href: "/admin/orders",
      icon: ShoppingBag,
    },
    {
      label: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      label: "Deals",
      href: "/admin/deals",
      icon: Gift,
    },
    {
      label: "Delivery Boys",
      href: "/admin/delivery",
      icon: Truck,
    },
    {
      label: "Customers",
      href: "/admin/customers",
      icon: Users,
    },
  ];

  const deliveryNavigation = [
    {
      label: "Dashboard",
      href: "/delivery",
      icon: LayoutDashboard,
    },
    {
      label: "My Orders",
      href: "/delivery/orders",
      icon: ShoppingBag,
    },
    {
      label: "Active Delivery",
      href: "/delivery/active",
      icon: Truck,
    },
  ];

  const customerNavigation = [
    {
      label: "Dashboard",
      href: "/customer",
      icon: LayoutDashboard,
    },
    {
      label: "Menu",
      href: "/customer/menu",
      icon: UtensilsCrossed,
    },
    {
      label: "My Orders",
      href: "/customer/orders",
      icon: ShoppingBag,
    },
  ];

  let navigation = [];

  if (role === "admin") {
    navigation = adminNavigation;
  } else if (role === "deliveryBoy") {
    navigation = deliveryNavigation;
  } else if (role === "customer") {
    navigation = customerNavigation;
  }

  const isActive = (href) => {
    if (href === "/admin" || href === "/delivery" || href === "/customer") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  const handleNavigation = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col
          border-r border-[#eadfd7] bg-[#fffaf6]
          shadow-2xl shadow-[#6f1d1b]/10
          transition-transform duration-300 ease-in-out
          lg:static lg:z-auto lg:h-screen lg:translate-x-0 lg:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ================= HEADER ================= */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#eadfd7] px-5">
          <Link
            href="/"
            onClick={handleNavigation}
            className="group flex items-center gap-3"
          >
            {/* Logo */}
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-md shadow-[#c92a2a]/20 transition-transform duration-200 group-hover:scale-105">
              <ChefHat size={24} strokeWidth={2.5} />
            </div>

            {/* Brand */}
            <div className="leading-none">
              <div className="text-xl font-black tracking-tight text-[#241b16]">
                Dine<span className="text-[#c92a2a]">Flow</span>
              </div>

              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a39a94]">
                Restaurant system
              </div>
            </div>
          </Link>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-[#756b65] transition hover:bg-[#f9eee7] hover:text-[#c92a2a] lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* ================= USER CARD ================= */}
        <div className="px-4 pt-5">
          <div className="rounded-2xl border border-[#f0e2d8] bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c92a2a] text-sm font-black text-white">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              {/* User information */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-[#241b16]">
                  {user?.name || "User"}
                </p>

                <p className="mt-0.5 text-xs font-medium text-[#a39a94]">
                  {role === "admin"
                    ? "Administrator"
                    : role === "deliveryBoy"
                    ? "Delivery Partner"
                    : "Customer"}
                </p>
              </div>

              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Main label */}
          <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#a39a94]">
            Main menu
          </p>

          <div className="space-y-1.5">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`
                    group relative flex items-center gap-3 rounded-xl
                    px-3.5 py-3 text-sm font-bold
                    transition-all duration-200
                    ${
                      active
                        ? "bg-[#c92a2a] text-white shadow-md shadow-[#c92a2a]/20"
                        : "text-[#756b65] hover:bg-[#f9eee7] hover:text-[#c92a2a]"
                    }
                  `}
                >
                  {/* Active indicator */}
                  {active && (
                    <span className="absolute -left-4 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[#f97316]" />
                  )}

                  <Icon
                    size={19}
                    strokeWidth={active ? 2.5 : 2}
                    className={`
                      shrink-0 transition-transform duration-200
                      ${
                        active
                          ? "text-white"
                          : "text-[#a39a94] group-hover:scale-105 group-hover:text-[#c92a2a]"
                      }
                    `}
                  />

                  <span className="flex-1">{item.label}</span>

                  {active && (
                    <ChevronRight
                      size={16}
                      className="text-white/70"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Management section - Admin only */}
          {role === "admin" && (
            <div className="mt-8">
              <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#a39a94]">
                System
              </p>

              <Link
                href="/admin/settings"
                onClick={handleNavigation}
                className={`
                  group flex items-center gap-3 rounded-xl px-3.5 py-3
                  text-sm font-bold transition-all duration-200
                  ${
                    isActive("/admin/settings")
                      ? "bg-[#c92a2a] text-white shadow-md shadow-[#c92a2a]/20"
                      : "text-[#756b65] hover:bg-[#f9eee7] hover:text-[#c92a2a]"
                  }
                `}
              >
                <Settings
                  size={19}
                  className={
                    isActive("/admin/settings")
                      ? "text-white"
                      : "text-[#a39a94] group-hover:text-[#c92a2a]"
                  }
                />

                <span className="flex-1">Settings</span>
              </Link>
            </div>
          )}

          {/* Restaurant badge */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-[#c92a2a] p-4">
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#f97316]/30" />

              <div className="relative">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                  <UtensilsCrossed size={18} />
                </div>

                <p className="text-xs font-black text-white">
                  DineFlow
                </p>

                <p className="mt-1 text-[11px] leading-4 text-white/65">
                  Smart restaurant management made simple.
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* ================= FOOTER ================= */}
        <div className="shrink-0 border-t border-[#eadfd7] p-4">
          <button
            type="button"
            onClick={onLogout}
            className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-bold text-[#756b65] transition-all duration-200 hover:bg-red-50 hover:text-[#c92a2a]"
          >
            <LogOut
              size={19}
              className="text-[#a39a94] transition-colors group-hover:text-[#c92a2a]"
            />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;