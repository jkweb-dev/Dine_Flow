"use client";

import { LockKeyhole, ShieldCheck } from "lucide-react";

const SecurityInfo = () => {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_18px_55px_rgba(88,47,27,0.06)] sm:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#c92a2a]">
          <LockKeyhole size={20} />
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-black text-[#3d2922]">
            Account security
          </h2>

          <p className="mt-1 text-xs font-medium leading-5 text-[#8c7468]">
            Your DineFlow account uses secure authentication to protect your
            account information and orders.
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
        <ShieldCheck size={19} className="shrink-0 text-green-600" />

        <div>
          <p className="text-xs font-black text-green-800">
            Secure authentication enabled
          </p>

          <p className="mt-0.5 text-[11px] font-medium leading-5 text-green-700">
            Your login session is protected by secure authentication cookies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityInfo;