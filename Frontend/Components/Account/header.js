"use client";

import { UserRound, Utensils } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff8f1] via-white to-orange-50 px-5 py-7 shadow-[0_18px_55px_rgba(88,47,27,0.07)] sm:px-8 sm:py-9">
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-100/70 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-red-100/60 blur-2xl" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c92a2a] text-white shadow-lg shadow-red-200">
          <UserRound size={27} strokeWidth={2.2} />
        </div>

        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <Utensils size={15} className="text-[#f97316]" />

            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f97316]">
              DineFlow
            </span>
          </div>

          <h1 className="text-2xl font-black tracking-tight text-[#3d2922] sm:text-3xl">
            My Account
          </h1>

          <p className="mt-1 max-w-xl text-sm font-medium leading-6 text-[#8c7468]">
            Manage your profile, view your order activity, and keep track of
            your DineFlow account.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;