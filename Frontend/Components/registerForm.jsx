"use client";

import Link from "next/link";
import {
  ChefHat,
  UserRound,
  Phone,
  LockKeyhole,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const RegisterForm = ({
  formData,
  loading,
  onChange,
  onSubmit,
}) => {
  return (
    <main className="min-h-screen bg-[#fff8f1] text-[#241b16]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Food Section */}
        <section className="relative hidden overflow-hidden bg-[#c92a2a] lg:flex">
          {/* Decorative circles */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f97316]/40" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#f97316]/30" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            {/* Logo */}
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#c92a2a] shadow-lg">
                <ChefHat size={25} strokeWidth={2.5} />
              </div>

              <span className="text-2xl font-black tracking-tight">
                Dine<span className="text-[#ffd166]">Flow</span>
              </span>
            </div>

            {/* Main content */}
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <Sparkles size={16} className="text-[#ffd166]" />
                Your table is waiting
              </div>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white xl:text-6xl">
                Great food.
                <br />
                Great moments.
                <br />
                <span className="text-[#ffd166]">One DineFlow.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
                Create your account and enjoy delicious meals, exclusive
                deals, easy ordering, and real-time delivery tracking.
              </p>

              {/* Food visual */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-3xl bg-[#ffd166] text-5xl shadow-xl">
                  🍕
                </div>

                <div className="flex h-20 w-20 translate-y-3 rotate-[7deg] items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
                  🍔
                </div>

                <div className="flex h-20 w-20 rotate-[-5deg] items-center justify-center rounded-3xl bg-[#f97316] text-5xl shadow-xl">
                  🍟
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-3 text-sm text-white/70">
              <ShieldCheck size={18} />
              <span>Your account is protected with secure authentication.</span>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-lg">
                <ChefHat size={24} />
              </div>

              <span className="text-2xl font-black">
                Dine<span className="text-[#c92a2a]">Flow</span>
              </span>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#f97316]">
                Join DineFlow
              </p>

              <h2 className="text-4xl font-black tracking-tight text-[#241b16]">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#756b65]">
                Sign up once and make your next food order even easier.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* User ID */}
              <div>
                <label
                  htmlFor="userId"
                  className="mb-2 block text-sm font-bold"
                >
                  User ID
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a39a94]"
                  />

                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    value={formData.userId}
                    onChange={onChange}
                    placeholder="Choose your user ID"
                    autoComplete="username"
                    className="h-13 w-full rounded-2xl border border-[#e7ddd5] bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a39a94]"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="h-13 w-full rounded-2xl border border-[#e7ddd5] bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold"
                >
                  Phone number
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a39a94]"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={onChange}
                    placeholder="03XX XXXXXXX"
                    autoComplete="tel"
                    className="h-13 w-full rounded-2xl border border-[#e7ddd5] bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a39a94]"
                  />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={onChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="h-13 w-full rounded-2xl border border-[#e7ddd5] bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-bold"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a39a94]"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={onChange}
                    placeholder="Enter your password again"
                    autoComplete="new-password"
                    className="h-13 w-full rounded-2xl border border-[#e7ddd5] bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-[#aaa19b] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/10"
                  />
                </div>
              </div>

            

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-6 text-sm font-bold text-white shadow-lg shadow-[#c92a2a]/20 transition hover:bg-[#ad2020] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Login link */}
            <p className="mt-7 text-center text-sm text-[#756b65]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#c92a2a] transition hover:text-[#f97316]"
              >
                Sign in
              </Link>
            </p>

            <p className="mt-6 text-center text-xs leading-5 text-[#a39a94]">
              By creating an account, you agree to use DineFlow responsibly
              and provide accurate information.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterForm;