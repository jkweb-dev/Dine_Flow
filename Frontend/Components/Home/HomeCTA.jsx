"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const HomeCTA = ({ onStartOrder }) => {
  const handleStartOrder = () => {
    if (onStartOrder) {
      onStartOrder();
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fffaf5] py-14 sm:py-16 lg:py-20">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#ffdccc] opacity-70 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#ffe8c9] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#c92a2a] via-[#d83d2e] to-[#f06b32] px-6 py-12 shadow-[0_25px_70px_-25px_rgba(180,50,30,0.45)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[30px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full border-[35px] border-white/10" />

          <div className="pointer-events-none absolute right-[25%] top-8 h-16 w-16 rounded-full bg-white/5 blur-xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#ffd166]" />

                <span className="text-xs font-bold tracking-wide text-white">
                  Your cravings are calling
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Hungry?
                <span className="block text-[#ffe2b8]">
                  Let's fix that.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Pick your favorites, place your order, and let us bring
                something delicious right to your door.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#ffd166]" />

                  <span className="text-xs font-semibold text-white/90">
                    Fast delivery
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-[#ffd166]" />

                  <span className="text-xs font-semibold text-white/90">
                    Easy ordering
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ffd166]" />

                  <span className="text-xs font-semibold text-white/90">
                    Doorstep delivery
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/menu"
                  onClick={handleStartOrder}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-extrabold text-[#c92a2a] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fffaf5] hover:shadow-2xl active:translate-y-0 sm:px-7"
                >
                  Order Now

                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative mx-auto hidden h-56 w-56 lg:block xl:h-64 xl:w-64">
              <div className="absolute inset-0 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm" />

              <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white/10 shadow-inner">
                <div className="flex h-36 w-36 rotate-[-6deg] items-center justify-center rounded-[45%] bg-[#f0a56e] shadow-2xl">
                  <div className="flex h-28 w-28 items-center justify-center rounded-[45%] bg-[#f7c99d]">
                    <div className="h-20 w-20 rounded-[42%] bg-[#c86a35] shadow-[inset_0_-8px_12px_rgba(80,30,10,0.25)]" />
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 top-8 flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Sparkles className="h-5 w-5 text-[#f97316]" />
              </div>

              <div className="absolute bottom-6 -left-2 flex h-11 w-11 -rotate-12 items-center justify-center rounded-2xl bg-[#ffd166] shadow-lg">
                <ShoppingBag className="h-5 w-5 text-[#8c421e]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;