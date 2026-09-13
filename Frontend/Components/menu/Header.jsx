
"use client";

import { Sparkles, UtensilsCrossed } from "lucide-react";

const MenuHeader = () => {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5] pt-10 sm:pt-14 lg:pt-16">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-24 top-10 h-52 w-52 rounded-full bg-[#ffdccc]/60 blur-3xl sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#ffe8c9]/70 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff0e6]">
              <Sparkles className="h-3 w-3 text-[#f97316]" />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c4512c] sm:text-xs">
              Fresh from our kitchen
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-[#2b211d] sm:text-5xl lg:text-6xl">
            Explore Our
            <span className="block text-[#c92a2a]">Delicious Menu</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#725f57] sm:text-base sm:leading-7">
            From juicy burgers and cheesy pizzas to crispy sides and refreshing
            drinks, discover something delicious for every craving.
          </p>

          {/* Small visual feature row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#fff0e6]">
                <UtensilsCrossed className="h-4 w-4 text-[#c92a2a]" />
              </div>

              <span className="text-xs font-bold text-[#5f4d46] sm:text-sm">
                Made fresh
              </span>
            </div>

            <div className="hidden h-5 w-px bg-orange-200 sm:block" />

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#f97316]" />

              <span className="text-xs font-bold text-[#5f4d46] sm:text-sm">
                Quality ingredients
              </span>
            </div>

            <div className="hidden h-5 w-px bg-orange-200 sm:block" />

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#c92a2a]" />

              <span className="text-xs font-bold text-[#5f4d46] sm:text-sm">
                Fast delivery
              </span>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-10 sm:h-12 lg:h-14" />
      </div>
    </section>
  );
};

export default MenuHeader;

