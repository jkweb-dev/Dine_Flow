"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

const HeroSection = ({
  onOrderNow,
  onExploreDeals
}) => {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5]">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#ffe4d2] opacity-70 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ffd7cc] opacity-70 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-[#fff0df] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Small badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-3.5 py-2 shadow-sm shadow-orange-100/50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0e7]">
                <Sparkles className="h-3.5 w-3.5 text-[#f97316]" />
              </span>

              <span className="text-xs font-bold tracking-wide text-[#9a5b3d] sm:text-sm">
                Fresh food. Happy cravings.
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.035em] text-[#2b211d] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Delicious food,
              <span className="block text-[#c92a2a]">
                delivered fast.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-[#715f55] sm:mt-6 sm:text-lg sm:leading-8">
              From juicy burgers and cheesy pizzas to crispy fries
              and refreshing drinks, order your favorites and enjoy
              them wherever you are.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                href="/menu"
                onClick={onOrderNow}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-6 text-sm font-bold text-white shadow-lg shadow-red-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b82323] hover:shadow-xl hover:shadow-red-200/70 active:translate-y-0"
              >
                Order Now

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/deals"
                onClick={onExploreDeals}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-orange-100 bg-white px-6 text-sm font-bold text-[#4e4039] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-[#fff7f0] hover:shadow-md active:translate-y-0"
              >
                Explore Deals
              </Link>
            </div>

            {/* Trust / benefits */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-orange-100 pt-6 sm:mt-10 sm:pt-7">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0e7]">
                  <Clock3 className="h-4 w-4 text-[#d65b2f]" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#3d302a]">
                    Fast Delivery
                  </p>
                  <p className="text-[11px] text-[#927e72]">
                    Fresh & quick
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-orange-100 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0e7]">
                  <Star className="h-4 w-4 fill-[#f97316] text-[#f97316]" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#3d302a]">
                    Quality Food
                  </p>
                  <p className="text-[11px] text-[#927e72]">
                    Made with care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Food Visual */}
          <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
            {/* Main visual background */}
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fff0e5] via-[#ffe4d4] to-[#ffd4c8] shadow-[0_25px_70px_-25px_rgba(160,55,30,0.35)] sm:rounded-[3rem]">
              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-white/40" />

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border-[30px] border-white/30" />

              <div className="absolute left-8 top-8 h-12 w-12 rounded-full bg-white/40 blur-sm" />

              {/* Food image placeholder / visual panel */}
              <div className="absolute inset-8 overflow-hidden rounded-[2rem] bg-[#f6c9b4] shadow-2xl shadow-[#a44b2d]/15 sm:inset-10 sm:rounded-[2.5rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f9d7c5] via-[#efb59b] to-[#d97e5d]" />

                {/* Food-inspired composition */}
                <div className="absolute left-1/2 top-1/2 flex h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] items-center justify-center rounded-[45%] bg-[#e7a477] shadow-[0_30px_45px_-15px_rgba(74,37,20,0.4)]">
                  <div className="flex h-[78%] w-[78%] items-center justify-center rounded-[45%] bg-[#f4c49f] shadow-inner">
                    <div className="relative h-[68%] w-[68%] rounded-[42%] bg-[#c86a35] shadow-[inset_0_-12px_15px_rgba(89,39,15,0.25),0_15px_25px_rgba(70,30,10,0.25)]">
                      <div className="absolute left-[18%] top-[23%] h-3 w-3 rounded-full bg-[#f9d48c]" />
                      <div className="absolute right-[23%] top-[31%] h-2.5 w-2.5 rounded-full bg-[#f9d48c]" />
                      <div className="absolute left-[34%] bottom-[23%] h-2.5 w-2.5 rounded-full bg-[#f9d48c]" />
                      <div className="absolute right-[28%] bottom-[21%] h-3 w-3 rounded-full bg-[#f9d48c]" />
                    </div>
                  </div>
                </div>

                {/* Decorative food elements */}
                <div className="absolute left-[12%] top-[15%] h-10 w-10 rotate-12 rounded-full bg-[#c92a2a] shadow-lg sm:h-12 sm:w-12" />

                <div className="absolute bottom-[15%] right-[12%] h-8 w-8 -rotate-12 rounded-full bg-[#f97316] shadow-lg sm:h-10 sm:w-10" />

                <div className="absolute right-[17%] top-[18%] h-5 w-5 rounded-full bg-[#f7c548] sm:h-6 sm:w-6" />

                <div className="absolute bottom-[20%] left-[18%] h-5 w-5 rounded-full bg-[#f7c548] sm:h-6 sm:w-6" />
              </div>

              {/* Floating rating card */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-[#71321f]/10 backdrop-blur-sm sm:left-3 sm:p-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0e7]">
                    <Star className="h-4 w-4 fill-[#f97316] text-[#f97316]" />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[#332720]">
                      4.9/5
                    </p>
                    <p className="text-[10px] font-medium text-[#927e72]">
                      Happy customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating delivery card */}
              <div className="absolute bottom-4 right-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-[#71321f]/10 backdrop-blur-sm sm:bottom-5 sm:right-5 sm:p-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0e7]">
                    <MapPin className="h-4 w-4 text-[#c92a2a]" />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[#332720]">
                      To your door
                    </p>
                    <p className="text-[10px] font-medium text-[#927e72]">
                      Freshly delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative badge */}
            <div className="absolute -right-2 top-8 flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl bg-[#c92a2a] text-center shadow-lg shadow-red-200/60 sm:-right-4 sm:top-10 sm:h-16 sm:w-16">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-white">
                  Fresh
                </p>

                <Sparkles className="mx-auto mt-0.5 h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;