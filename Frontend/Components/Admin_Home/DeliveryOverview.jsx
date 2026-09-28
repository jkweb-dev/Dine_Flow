"use client";

import {
  ArrowRight,
  Bike,
  Phone,
  PackageCheck,
} from "lucide-react";

const DeliveryOverview = ({ deliveryOverview }) => {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white shadow-[0_14px_40px_rgba(88,47,27,0.05)]">
      <div className="flex items-center justify-between border-b border-orange-100 px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-base font-black text-[#3d2922]">
            Delivery Overview
          </h2>

          <p className="mt-1 text-xs font-medium text-[#9b867b]">
            Current delivery workload
          </p>
        </div>

        <a
          href="/admin/delivery-boys"
          className="flex items-center gap-1 text-xs font-black text-[#c92a2a]"
        >
          Manage
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="p-5 sm:p-6">
        {(deliveryOverview || []).length > 0 ? (
          <div className="space-y-3">
            {deliveryOverview.map((boy) => (
              <div
                key={boy._id}
                className="flex items-center gap-3 rounded-xl border border-orange-50 p-3.5 transition hover:bg-[#fffaf6]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
                  <Bike size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-extrabold text-[#5f493f]">
                    {boy.name}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-[10px] font-medium text-[#9b867b]">
                    <Phone size={10} />
                    {boy.phone || "No phone"}
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-[#f97316]">
                    <PackageCheck size={14} />
                    <span className="text-sm font-black text-[#3d2922]">
                      {boy.activeOrders}
                    </span>
                  </div>

                  <p className="mt-0.5 text-[9px] font-bold text-[#9b867b]">
                    active orders
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#fffaf6] px-5 py-10 text-center">
            <Bike
              size={30}
              className="mx-auto text-[#f97316]"
            />

            <p className="mt-3 text-sm font-black text-[#5f493f]">
              No active deliveries
            </p>

            <p className="mt-1 text-xs text-[#9b867b]">
              Delivery workload will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeliveryOverview;