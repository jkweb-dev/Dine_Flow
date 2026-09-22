"use client";

import { CalendarDays, Phone, ShieldCheck, UserRound } from "lucide-react";

const ProfileCard = ({ user }) => {
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "N/A";

  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.07)]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#c92a2a] to-[#a91f1f] px-5 py-7 text-white sm:px-7">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />

        <div className="relative flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-[#c92a2a] shadow-lg sm:h-20 sm:w-20 sm:text-2xl">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-100">
              Customer account
            </p>

            <h2 className="mt-1 truncate text-xl font-black sm:text-2xl">
              {user?.name || "Customer"}
            </h2>

            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
              <ShieldCheck size={14} />
              {user?.role || "customer"}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf6] p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
            <UserRound size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
              User ID
            </p>

            <p className="mt-1 truncate text-sm font-black text-[#3d2922]">
              {user?.userId || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf6] p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
            <Phone size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
              Phone
            </p>

            <p className="mt-1 truncate text-sm font-black text-[#3d2922]">
              {user?.phone || "N/A"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-[#fffaf6] p-4 sm:col-span-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
            <CalendarDays size={18} />
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
              Member since
            </p>

            <p className="mt-1 text-sm font-black text-[#3d2922]">
              {memberSince}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;