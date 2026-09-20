"use client";
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Clock3,
  MapPin,
  PackageCheck,
  Pizza,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/src/context/authProvider";
import HomeNavbar from "@/Components/Home/Navbar";

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Ordering",
    description:
      "Browse the menu, choose your favorite items, customize your order, and place it in just a few simple steps.",
  },
  {
    icon: Clock3,
    title: "Real-Time Updates",
    description:
      "Stay informed about your order from the moment it is placed until it reaches your doorstep.",
  },
  {
    icon: MapPin,
    title: "Live Delivery Tracking",
    description:
      "Track your delivery and see where your order is while it is on the way.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Experience",
    description:
      "Designed to make restaurant ordering simple, organized, and dependable for everyone.",
  },
];

const steps = [
  {
    number: "01",
    icon: UtensilsCrossed,
    title: "Explore the Menu",
    description:
      "Discover delicious meals, deals, and different options available at your favorite restaurant.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Build Your Order",
    description:
      "Choose your items, select available sizes, review your cart, and prepare your order.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Place Your Order",
    description:
      "Complete checkout and send your order directly to the restaurant for processing.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Enjoy the Delivery",
    description:
      "Follow your order as it moves through the delivery process and arrives at your location.",
  },
];

const highlights = [
  "Beautiful and simple menu browsing",
  "Deals and special offers",
  "Smart cart and checkout experience",
  "Order status updates",
  "Delivery management",
  "Live delivery location tracking",
];



export default function AboutPage() {

  const {user} = useAuth() ;

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf6] text-[#2b1710]">
      {/* ================= HERO ================= */}
      <section className="relative isolate">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#f97316]/10 blur-3xl" />
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#c92a2a]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        </div>

<HomeNavbar user={user}/>
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Hero text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0d9cc] bg-white px-4 py-2 text-sm font-semibold text-[#c92a2a] shadow-sm">
                <Sparkles className="h-4 w-4" />
                <span>More than just an ordering platform</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Great food.
                <br />
                <span className="text-[#c92a2a]">Simple ordering.</span>
                <br />
                Better experience.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#725f57] sm:text-lg sm:leading-8">
                DineFlow brings the restaurant experience into one beautiful,
                simple platform. Discover your favorite food, build your
                order, track its progress, and enjoy a smoother way to dine.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/menu"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-6 font-bold text-white shadow-[0_10px_25px_rgba(201,42,42,0.2)] transition hover:-translate-y-0.5 hover:bg-[#b52222]"
                >
                  Explore Our Menu
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-[#eadbd2] bg-white px-6 font-bold text-[#44271e] transition hover:border-[#d9c4b8] hover:bg-[#fff7f1]"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="relative rounded-[2rem] border border-[#eadbd2] bg-white p-3 shadow-[0_25px_70px_rgba(75,40,20,0.12)]">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#c92a2a] via-[#e34b26] to-[#f97316] px-6 pb-7 pt-8 text-white sm:px-8">
                  {/* Decorative circles */}
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                  <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-black/5" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white/70">
                          Welcome to
                        </p>
                        <h2 className="mt-1 text-3xl font-black tracking-tight">
                          DineFlow
                        </h2>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <Pizza className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mt-10 rounded-3xl bg-white p-5 text-[#2b1710] shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#9a8177]">
                            Your Order
                          </p>
                          <p className="mt-1 text-xl font-black">
                            Delicious choices
                          </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
                          <ShoppingBag className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-3 rounded-2xl bg-[#fffaf6] p-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffe8dc] text-xl">
                            🍕
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold">Signature Pizza</p>
                            <p className="text-xs text-[#8d776e]">
                              Large · 1 item
                            </p>
                          </div>
                          <span className="text-sm font-bold">Rs. 1,299</span>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-[#fffaf6] p-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff1d8] text-xl">
                            🍔
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold">Classic Burger</p>
                            <p className="text-xs text-[#8d776e]">
                              Regular · 1 item
                            </p>
                          </div>
                          <span className="text-sm font-bold">Rs. 699</span>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-[#eee2da] pt-4">
                        <span className="font-semibold text-[#806d65]">
                          Total
                        </span>
                        <span className="text-xl font-black text-[#c92a2a]">
                          Rs. 1,998
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">On the way</p>
                        <p className="text-xs text-white/70">
                          Your order is moving toward you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#eadbd2] bg-white px-4 py-3 shadow-xl sm:-left-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf8ee] text-[#279653]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#8b756c]">
                      Experience
                    </p>
                    <p className="text-sm font-black">Made simpler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-y border-[#eee1d9] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#c92a2a]">
              What is DineFlow?
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              A smoother way to experience your favorite restaurant.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#725f57] sm:text-lg">
              DineFlow is a complete restaurant ordering and management
              platform built to connect customers, restaurant operations, and
              delivery into one organized experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-[#fffaf6]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#c92a2a]">
              Why DineFlow
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Everything you need for a better ordering experience.
            </h2>

            <p className="mt-4 leading-7 text-[#725f57]">
              From discovering food to receiving your order, DineFlow keeps
              every important step simple and connected.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-[#eadfd7] bg-white p-6 shadow-[0_8px_30px_rgba(70,40,20,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(70,40,20,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0eb] text-[#c92a2a] transition group-hover:bg-[#c92a2a] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#806d65]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="text-center">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#c92a2a]">
              How it works
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              From craving to doorstep.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#725f57]">
              We keep the process straightforward so you can spend less time
              figuring things out and more time enjoying your food.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-[#eadfd7] bg-[#fffaf6] p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c92a2a] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-4xl font-black text-[#eadfd7]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-black">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#806d65]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= RESTAURANT CONTROL ================= */}
      <section className="bg-[#2b1710] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c92a2a]">
                <ChefHat className="h-7 w-7" />
              </div>

              <span className="mt-7 block text-sm font-black uppercase tracking-[0.2em] text-[#ff9b63]">
                Behind the experience
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Powerful control for the restaurant.
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                DineFlow is not only designed for customers. The restaurant
                gets a centralized system to manage products, prices, orders,
                customers, and delivery operations.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ff8a5b]" />
                  <span className="text-sm font-semibold text-white/80">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-[#fffaf6]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0eb] text-[#c92a2a]">
            <Sparkles className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Built around one simple idea.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#725f57]">
            Ordering food should feel exciting, not complicated. DineFlow
            brings the menu, cart, checkout, order management, and delivery
            experience together so that every part of the journey feels
            effortless.
          </p>

          <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-[#c92a2a]" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#c92a2a] to-[#f05a28] px-6 py-14 text-center text-white shadow-[0_25px_60px_rgba(201,42,42,0.18)] sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <UtensilsCrossed className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Ready to find something delicious?
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              Explore the menu, discover your next favorite meal, and let
              DineFlow take care of the rest.
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-black text-[#c92a2a] transition hover:-translate-y-0.5 hover:bg-[#fff7f1]"
            >
              Browse Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}