"use client";

import { Package } from "lucide-react";

const OrderItems = ({ items }) => {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Package size={18} className="text-[#f97316]" />

        <h3 className="text-sm font-black uppercase tracking-wide text-[#5d4035]">
          Your items
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.type}-${item.productId || item.dealId}-${index}`}
            className="flex gap-3 rounded-2xl border border-orange-100 bg-[#fffaf6] p-3 sm:p-4"
          >
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-orange-50 sm:h-24 sm:w-24">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl">
                  🍔
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="line-clamp-2 text-sm font-black text-[#3d2922] sm:text-base">
                    {item.name}
                  </h4>

                  <span className="mt-1 inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#f97316]">
                    {item.type}
                  </span>
                </div>

                <p className="shrink-0 text-sm font-black text-[#c92a2a] sm:text-base">
                  Rs. {item.price.toLocaleString()}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-[#8c7468]">
                {item.size && (
                  <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-orange-100">
                    Size: {item.size}
                  </span>
                )}

                <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-orange-100">
                  Qty: {item.quantity}
                </span>

                <span className="ml-auto font-black text-[#5d4035]">
                  Rs.{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderItems;