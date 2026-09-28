"use client";

import {
  Users,
  UserPlus,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const CustomerOverview = ({ stats }) => {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white shadow-[0_14px_40px_rgba(88,47,27,0.05)]">
      <div className="flex items-center justify-between border-b border-orange-100 px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-base font-black text-[#3d2922]">
            Customer Overview
          </h2>

          <p className="mt-1 text-xs font-medium text-[#9b867b]">
            Customer growth snapshot
          </p>
        </div>

        <a
          href="/admin/customers"
          className="flex items-center gap-1 text-xs font-black text-[#c92a2a]"
        >
          View
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-3 sm:p-6">
        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <Users
            size={19}
            className="text-[#c92a2a]"
          />

          <p className="mt-4 text-2xl font-black text-[#3d2922]">
            {stats?.total || 0}
          </p>

          <p className="mt-1 text-xs font-bold text-[#5f493f]">
            Total Customers
          </p>
        </div>

        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <UserPlus
            size={19}
            className="text-[#f97316]"
          />

          <p className="mt-4 text-2xl font-black text-[#3d2922]">
            {stats?.today || 0}
          </p>

          <p className="mt-1 text-xs font-bold text-[#5f493f]">
            New Today
          </p>
        </div>

        <div className="rounded-2xl bg-[#fffaf6] p-4">
          <TrendingUp
            size={19}
            className="text-green-600"
          />

          <p className="mt-4 text-2xl font-black text-[#3d2922]">
            {stats?.thisWeek || 0}
          </p>

          <p className="mt-1 text-xs font-bold text-[#5f493f]">
            New This Week
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerOverview;