"use client";

import { SearchX, UsersRound } from "lucide-react";

const EmptyCustomers = ({ hasSearch }) => {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white px-6 py-16 text-center shadow-[0_18px_55px_rgba(88,47,27,0.06)] sm:px-10">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-[#f97316]">
        {hasSearch ? (
          <SearchX size={32} />
        ) : (
          <UsersRound size={32} />
        )}
      </div>

      <h2 className="mt-6 text-xl font-black text-[#3d2922] sm:text-2xl">
        {hasSearch ? "No customers found" : "No customers yet"}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm font-medium leading-6 text-[#8c7468]">
        {hasSearch
          ? "No customer matches your current search. Try a different name, user ID, or phone number."
          : "Customers will appear here once they create an account on DineFlow."}
      </p>
    </section>
  );
};

export default EmptyCustomers;