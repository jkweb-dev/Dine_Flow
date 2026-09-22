"use client";

import { ArrowRight, ClipboardList, Utensils } from "lucide-react";
import { useRouter } from "next/navigation";

const QuickActions = () => {
  const router = useRouter();

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#a58b7d]">
          Quick access
        </p>

        <h2 className="mt-1 text-xl font-black text-[#3d2922]">
          What would you like to do?
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => router.push("/orders")}
          className="group flex items-center justify-between rounded-2xl border border-orange-100 bg-white p-4 text-left shadow-[0_12px_35px_rgba(88,47,27,0.05)] transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-[0_16px_40px_rgba(88,47,27,0.08)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#c92a2a]">
              <ClipboardList size={20} />
            </div>

            <div>
              <p className="text-sm font-black text-[#3d2922]">
                My Orders
              </p>

              <p className="mt-0.5 text-xs font-medium text-[#8c7468]">
                View your order history
              </p>
            </div>
          </div>

          <ArrowRight
            size={18}
            className="text-[#b99b8b] transition group-hover:translate-x-1 group-hover:text-[#c92a2a]"
          />
        </button>

        <button
          type="button"
          onClick={() => router.push("/menu")}
          className="group flex items-center justify-between rounded-2xl border border-orange-100 bg-white p-4 text-left shadow-[0_12px_35px_rgba(88,47,27,0.05)] transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_16px_40px_rgba(88,47,27,0.08)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
              <Utensils size={20} />
            </div>

            <div>
              <p className="text-sm font-black text-[#3d2922]">
                Browse Menu
              </p>

              <p className="mt-0.5 text-xs font-medium text-[#8c7468]">
                Discover something delicious
              </p>
            </div>
          </div>

          <ArrowRight
            size={18}
            className="text-[#b99b8b] transition group-hover:translate-x-1 group-hover:text-[#f97316]"
          />
        </button>
      </div>
    </section>
  );
};

export default QuickActions;