"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  ClipboardList,
  ChevronRight,
} from "lucide-react";

const HomeNavbar = ({
  user,
  onLoginClick,
  onLogoutClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

 

  const handleLoginClick = () => {
    closeMobileMenu();

    if (onLoginClick) {
      onLoginClick();
    }
  };

  const handleLogoutClick = () => {
    closeMobileMenu();

    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-[#fffaf5]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c92a2a] to-[#f97316] shadow-md shadow-orange-200/50 transition-transform duration-200 group-hover:scale-105">
            <span className="text-lg font-black text-white">D</span>
          </div>

          <div className="leading-none">
            <span className="block text-[21px] font-extrabold tracking-tight text-[#2b211d]">
              Dine<span className="text-[#d63b2f]">Flow</span>
            </span>

            <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9a8174] sm:block">
              Fresh. Fast. Delicious.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-[#c92a2a] transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="text-sm font-semibold text-[#5f5049] transition-colors duration-200 hover:text-[#c92a2a]"
          >
            Menu
          </Link>

          <Link
            href="/deals"
            className="text-sm font-semibold text-[#5f5049] transition-colors duration-200 hover:text-[#c92a2a]"
          >
            Deals
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-[#5f5049] transition-colors duration-200 hover:text-[#c92a2a]"
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          
          {user ? (
            <>
              <Link
                href="/orders"
                className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-[#5f5049] transition-colors duration-200 hover:bg-orange-50 hover:text-[#c92a2a]"
              >
                <ClipboardList className="h-[17px] w-[17px]" />
                My Orders
              </Link>

              <Link
                href="/account"
                className="flex h-10 items-center gap-2 rounded-full bg-[#fff1e8] px-4 text-sm font-semibold text-[#b52b27] transition-all duration-200 hover:bg-[#ffe7d7]"
              >
                <User className="h-[17px] w-[17px]" />
                Account
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              onClick={handleLoginClick}
              className="flex h-10 items-center gap-2 rounded-full bg-[#c92a2a] px-5 text-sm font-bold text-white shadow-md shadow-red-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b82323] hover:shadow-lg"
            >
              <User className="h-[17px] w-[17px]" />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c92a2a] text-white shadow-md shadow-red-200/50 transition-colors hover:bg-[#b82323]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-orange-100 bg-[#fffaf5] transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl overflow-y-auto px-4 pb-6 pt-4 sm:px-6">
          {/* Mobile navigation */}
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center justify-between rounded-2xl bg-[#fff0e7] px-4 py-3.5 text-sm font-bold text-[#c92a2a]"
            >
              <span>Home</span>
              <ChevronRight className="h-4 w-4" />
            </Link>

            <Link
              href="/menu"
              onClick={closeMobileMenu}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#51443d] transition-colors hover:bg-orange-50"
            >
              <span>Menu</span>
              <ChevronRight className="h-4 w-4 text-[#a99489]" />
            </Link>

            <Link
              href="/deals"
              onClick={closeMobileMenu}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#51443d] transition-colors hover:bg-orange-50"
            >
              <span>Deals</span>
              <ChevronRight className="h-4 w-4 text-[#a99489]" />
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#51443d] transition-colors hover:bg-orange-50"
            >
              <span>About</span>
              <ChevronRight className="h-4 w-4 text-[#a99489]" />
            </Link>

            {user && (
              <>
                <Link
                  href="/orders"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#51443d] transition-colors hover:bg-orange-50"
                >
                  <span>My Orders</span>
                  <ChevronRight className="h-4 w-4 text-[#a99489]" />
                </Link>

                <Link
                  href="/account"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#51443d] transition-colors hover:bg-orange-50"
                >
                  <span>Account</span>
                  <ChevronRight className="h-4 w-4 text-[#a99489]" />
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Cart */}
          
        

          {/* Authentication */}
          {user ? (
            <button
              type="button"
              onClick={handleLogoutClick}
              className="mt-3 flex w-full items-center justify-center rounded-2xl border border-red-100 bg-white px-4 py-3.5 text-sm font-bold text-[#c92a2a] transition-colors hover:bg-red-50"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={handleLoginClick}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-red-200/50 transition-colors hover:bg-[#b82323]"
            >
              <User className="h-[18px] w-[18px]" />
              Login
            </Link>
          )}

          {/* Mobile restaurant note */}
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#fff1e8] to-[#fff7ef] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#c92a2a]">
              DineFlow
            </p>

            <p className="mt-1 text-sm font-medium leading-5 text-[#705d52]">
              Fresh food, easy ordering, and fast delivery.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;