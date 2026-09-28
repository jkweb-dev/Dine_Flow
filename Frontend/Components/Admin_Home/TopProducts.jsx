"use client";

import {
  ArrowRight,
  Trophy,
  ShoppingBag,
} from "lucide-react";

const TopProducts = ({ products }) => {
  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white shadow-[0_14px_40px_rgba(88,47,27,0.05)]">
      <div className="flex items-center justify-between border-b border-orange-100 px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-base font-black text-[#3d2922]">
            Top Products
          </h2>

          <p className="mt-1 text-xs font-medium text-[#9b867b]">
            Best-selling products
          </p>
        </div>

        <a
          href="/admin/products"
          className="flex items-center gap-1 text-xs font-black text-[#c92a2a]"
        >
          Products
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="p-5 sm:p-6">
        {(products || []).length > 0 ? (
          <div className="space-y-3">
            {products.map((product, index) => (
              <div
                key={product._id || product.name}
                className="flex items-center gap-3 rounded-xl border border-orange-50 p-3 transition hover:bg-[#fffaf6]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-xs font-black text-[#f97316]">
                  #{index + 1}
                </div>

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-11 w-11 shrink-0 rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8f1] text-[#f97316]">
                    <ShoppingBag size={18} />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-extrabold text-[#5f493f]">
                    {product.name}
                  </p>

                  <p className="mt-1 text-[10px] font-medium text-[#9b867b]">
                    {product.quantity} units sold
                  </p>
                </div>

                {index === 0 && (
                  <Trophy
                    size={18}
                    className="shrink-0 text-[#f97316]"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <ShoppingBag
              size={30}
              className="mx-auto text-[#f97316]"
            />

            <p className="mt-3 text-sm font-black text-[#5f493f]">
              No product sales yet
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopProducts;