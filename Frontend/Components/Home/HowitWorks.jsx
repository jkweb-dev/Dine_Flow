"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Clock3,
  MapPin,
  ShoppingBag,
  Utensils,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Utensils,
    title: "Choose your food",
    description:
      "Browse our menu, discover your favorites, and add everything you want to your cart.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Place your order",
    description:
      "Review your order, add your delivery details, and place it in just a few simple steps.",
  },
  {
    number: "03",
    icon: ChefHat,
    title: "Enjoy your meal",
    description:
      "Our team prepares your food fresh and gets it on its way to your doorstep.",
  },
];

const HowItWorks = ({ onStartOrder }) => {
  const handleStartOrder = () => {
    if (onStartOrder) {
      onStartOrder();
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fff0e7] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1 w-7 rounded-full bg-[#f97316]" />

            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c96a3d]">
              Simple & Easy
            </span>

            <span className="h-1 w-7 rounded-full bg-[#f97316]" />
          </div>

          <h2 className="text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl lg:text-4xl">
            Good food in 3 simple steps
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#806f65] sm:text-base">
            From your first click to your first bite, ordering your favorite
            food couldn't be easier.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6 lg:mt-12">
          {/* Connecting Line - Desktop */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[52px] hidden h-px bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-[2rem] border border-orange-100 bg-[#fffaf5] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg hover:shadow-orange-100/50 sm:p-7"
              >
                {/* Step Number */}
                <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-[1.35rem] bg-white shadow-md ring-1 ring-orange-100 transition-all duration-300 group-hover:scale-105 group-hover:ring-orange-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0e7]">
                    <Icon className="h-5.5 w-5.5 text-[#c92a2a]" />
                  </div>
                </div>

                <div className="mt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#e08055]">
                    Step {step.number}
                  </span>

                  <h3 className="mt-1.5 text-lg font-extrabold text-[#332720] sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#87756b]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] px-4 py-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7]">
              <Clock3 className="h-4 w-4 text-[#d65b2f]" />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[#3d302a]">
                Fast delivery
              </p>
              <p className="mt-0.5 text-[10px] text-[#958278]">
                Fresh food, delivered quickly
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] px-4 py-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7]">
              <CheckCircle2 className="h-4 w-4 text-[#d65b2f]" />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[#3d302a]">
                Easy ordering
              </p>
              <p className="mt-0.5 text-[10px] text-[#958278]">
                Simple from start to finish
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] px-4 py-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7]">
              <MapPin className="h-4 w-4 text-[#d65b2f]" />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[#3d302a]">
                Doorstep delivery
              </p>
              <p className="mt-0.5 text-[10px] text-[#958278]">
                Delivered right where you are
              </p>
            </div>
          </div>
        </div>

        {/* Start Ordering CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#fff0e7] via-[#fff6ef] to-[#ffe9df] p-5 sm:flex-row sm:px-7 sm:py-6">
          <div>
            <h3 className="text-base font-extrabold text-[#332720] sm:text-lg">
              Ready to find your next favorite meal?
            </h3>

            <p className="mt-1 text-xs leading-5 text-[#806f65] sm:text-sm">
              Explore our menu and start building your order.
            </p>
          </div>

          <Link
            href="/menu"
            onClick={handleStartOrder}
            className="group flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-3 text-xs font-bold text-white shadow-md shadow-red-200/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b82323] hover:shadow-lg sm:w-auto"
          >
            Start Ordering

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;