"use client";

import {
  Check,
  CircleCheck,
  Clock3,
  PackageCheck,
  Truck,
  X,
} from "lucide-react";

const statusSteps = [
  {
    key: "pending",
    label: "Pending",
    icon: Clock3,
  },
  {
    key: "confirmed",
    label: "Confirmed",
    icon: CircleCheck,
  },
  {
    key: "assigned",
    label: "Assigned",
    icon: PackageCheck,
  },
  {
    key: "out_for_delivery",
    label: "On the way",
    icon: Truck,
  },
  {
    key: "delivered",
    label: "Delivered",
    icon: Check,
  },
];

const OrderStatus = ({ status }) => {
  const isCancelled = status === "cancelled";
  const isRejected = status === "rejected";

  if (isCancelled || isRejected) {
    return (
      <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-[#c92a2a]">
            <X size={20} strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-sm font-black text-[#8f2020]">
              Order {isCancelled ? "Cancelled" : "Rejected"}
            </p>

            <p className="mt-0.5 text-xs font-medium text-[#a05b5b]">
              This order is no longer being processed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = statusSteps.findIndex(
    (step) => step.key === status
  );

  return (
    <div className="rounded-2xl border border-orange-100 bg-[#fffaf6] p-4 sm:p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#a58b7d]">
            Order progress
          </p>

          <p className="mt-1 text-base font-black capitalize text-[#3d2922]">
            {status.replaceAll("_", " ")}
          </p>
        </div>

        <span className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-extrabold capitalize text-[#c45b17]">
          {status.replaceAll("_", " ")}
        </span>
      </div>

      <div className="hidden items-start sm:flex">
        {statusSteps.map((step, index) => {
          const Icon = step.icon;
          const completed = index <= currentIndex;
          const active = index === currentIndex;

          return (
            <div
              key={step.key}
              className="flex flex-1 items-start last:flex-none"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    completed
                      ? "bg-[#c92a2a] text-white"
                      : "bg-orange-100 text-[#b99b8b]"
                  } ${active ? "ring-4 ring-red-100" : ""}`}
                >
                  <Icon size={16} strokeWidth={2.5} />
                </div>

                <span
                  className={`mt-2 whitespace-nowrap text-[11px] font-bold ${
                    completed
                      ? "text-[#5d4035]"
                      : "text-[#b19a8e]"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < statusSteps.length - 1 && (
                <div
                  className={`mt-[18px] h-0.5 flex-1 ${
                    index < currentIndex
                      ? "bg-[#c92a2a]"
                      : "bg-orange-100"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile progress */}
      <div className="sm:hidden">
        <div className="mb-2 flex justify-between text-[10px] font-bold text-[#a58b7d]">
          <span>Placed</span>
          <span>Delivered</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-orange-100">
          <div
            className="h-full rounded-full bg-[#c92a2a] transition-all"
            style={{
              width: `${((currentIndex + 1) / statusSteps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;