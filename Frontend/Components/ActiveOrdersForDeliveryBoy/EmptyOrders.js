"use client";

import { CheckCircle2, Truck } from "lucide-react";

const EmptyActiveOrders = () => {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-orange-200 bg-white px-6 py-16 text-center shadow-[0_10px_35px_rgba(88,47,27,0.04)] sm:py-20">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
        <CheckCircle2 size={30} />
      </div>

      <h2 className="mt-5 text-xl font-black text-[#3d2922]">
        You're all caught up!
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#9b867b]">
        You don't have any active deliveries right now.
        New assigned orders will appear here.
      </p>

      <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-xl bg-[#fff8f1] px-4 py-2.5 text-xs font-bold text-[#806d63]">
        <Truck
          size={16}
          className="text-[#f97316]"
        />

        Ready for your next delivery
      </div>
    </div>
  );
};

export default EmptyActiveOrders;