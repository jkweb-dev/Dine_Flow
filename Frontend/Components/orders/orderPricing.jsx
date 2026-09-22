"use client";

import { ReceiptText } from "lucide-react";

const OrderPricing = ({ pricing }) => {
  return (
    <section className="rounded-2xl bg-[#3d2922] p-5 text-white sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <ReceiptText size={18} className="text-orange-300" />

        <h3 className="text-sm font-black uppercase tracking-wide">
          Order summary
        </h3>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-white/60">
            Subtotal
          </span>

          <span className="font-bold">
            Rs. {pricing.subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-white/60">
            Delivery fee
          </span>

          <span className="font-bold">
            Rs. {pricing.deliveryFee.toLocaleString()}
          </span>
        </div>

        <div className="my-4 h-px bg-white/10" />

        <div className="flex items-center justify-between gap-4">
          <span className="text-base font-black">
            Total
          </span>

          <span className="text-xl font-black text-orange-300">
            Rs. {pricing.total.toLocaleString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default OrderPricing;