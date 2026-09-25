"use client";

import {
  ChevronRight,
  Phone,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const CustomerTable = ({ customers, onSelectCustomer }) => {
  return (
    <div className="hidden overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.06)] lg:block">
      <div className="border-b border-orange-100 px-6 py-5">
        <h2 className="text-base font-black text-[#3d2922]">
          Customer list
        </h2>

        <p className="mt-1 text-xs font-medium text-[#a58b7d]">
          Select a customer to view their complete information.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="border-b border-orange-100 bg-[#fffaf6] text-left">
              <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Customer
              </th>

              <th className="px-4 py-4 text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Phone
              </th>

              <th className="px-4 py-4 text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Orders
              </th>

              <th className="px-4 py-4 text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Spent
              </th>

              <th className="px-4 py-4 text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Joined
              </th>

              <th className="px-6 py-4 text-right text-[10px] font-extrabold uppercase tracking-wider text-[#a58b7d]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => {
              const joinedDate = new Date(
                customer.createdAt
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });

              return (
                <tr
                  key={customer._id}
                  className="border-b border-orange-50 transition last:border-b-0 hover:bg-[#fffaf6]"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-black text-[#c92a2a]">
                        {customer.name
                          ?.charAt(0)
                          ?.toUpperCase() || "U"}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-[#3d2922]">
                          {customer.name}
                        </p>

                        <p className="mt-0.5 text-[11px] font-bold text-[#a58b7d]">
                          {customer.userId}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#6f5549]">
                      <Phone size={14} className="text-[#f97316]" />
                      {customer.phone}
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <ShoppingBag
                        size={14}
                        className="text-[#f97316]"
                      />

                      <span className="text-sm font-black text-[#3d2922]">
                        {customer.totalOrders}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <p className="text-sm font-black text-[#c92a2a]">
                      Rs. {customer.totalSpent.toLocaleString()}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <p className="text-xs font-bold text-[#6f5549]">
                      {joinedDate}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onSelectCustomer(customer)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#fff4ec] px-3.5 py-2.5 text-xs font-black text-[#c45b17] transition hover:bg-orange-100"
                    >
                      View
                      <ChevronRight size={15} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;