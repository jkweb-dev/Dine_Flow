"use client";

import { Banknote, CircleCheck, Clock3 } from "lucide-react";

const PaymentInfo = ({ payment }) => {
  const isPaid = payment.status === "paid";

  return (
    <section className="rounded-2xl border border-orange-100 bg-[#fffaf6] p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <Banknote size={18} className="text-[#f97316]" />

        <h3 className="text-sm font-black uppercase tracking-wide text-[#5d4035]">
          Payment
        </h3>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-3 ring-1 ring-orange-100">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
            Method
          </p>

          <p className="mt-1 text-sm font-black text-[#4d372e]">
            {payment.method === "cash_on_delivery"
              ? "Cash on Delivery"
              : payment.method}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {isPaid ? (
            <CircleCheck size={16} className="text-green-600" />
          ) : (
            <Clock3 size={16} className="text-[#f97316]" />
          )}

          <span
            className={`text-xs font-extrabold capitalize ${
              isPaid ? "text-green-600" : "text-[#c45b17]"
            }`}
          >
            {payment.status}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;