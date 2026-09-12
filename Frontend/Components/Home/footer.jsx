"use client";

import Link from "next/link";
import {
  ArrowUp,
  Clock3,
  Mail,
  MapPin,
  Phone,

} from "lucide-react";

const HomeFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-orange-100 bg-[#2b211d] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:py-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c92a2a] to-[#f97316] shadow-lg">
                <span className="text-lg font-black text-white">D</span>
              </div>

              <div className="leading-none">
                <span className="block text-[21px] font-extrabold tracking-tight text-white">
                  Dine<span className="text-[#ff7650]">Flow</span>
                </span>

                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Fresh. Fast. Delicious.
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              Delicious food, easy ordering, and fast doorstep delivery.
              Discover your favorites and enjoy every bite.
            </p>

            {/* Social */}
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-extrabold text-white">
              Quick Links
            </h3>

            <nav className="mt-5 space-y-3">
              <Link
                href="/"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/menu"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Menu
              </Link>

              <Link
                href="/deals"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Deals
              </Link>

              <Link
                href="/about"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-sm font-extrabold text-white">
              Customer
            </h3>

            <nav className="mt-5 space-y-3">
              <Link
                href="/cart"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Your Cart
              </Link>

              <Link
                href="/orders"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                My Orders
              </Link>

              <Link
                href="/account"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                My Account
              </Link>

              <Link
                href="/login"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Login / Register
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-extrabold text-white">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <MapPin className="h-4 w-4 text-[#ff7650]" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white/80">
                    Our Location
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-white/45">
                    Your Restaurant Address
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Phone className="h-4 w-4 text-[#ff7650]" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white/80">
                    Call Us
                  </p>

                  <p className="mt-0.5 text-xs text-white/45">
                    +92 XXX XXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Mail className="h-4 w-4 text-[#ff7650]" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white/80">
                    Email
                  </p>

                  <p className="mt-0.5 text-xs text-white/45">
                    hello@dineflow.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Clock3 className="h-4 w-4 text-[#ff7650]" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white/80">
                    Opening Hours
                  </p>

                  <p className="mt-0.5 text-xs text-white/45">
                    Daily · 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/35">
            © {new Date().getFullYear()} DineFlow. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[11px] text-white/35 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[11px] text-white/35 transition-colors hover:text-white/70"
            >
              Terms & Conditions
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;