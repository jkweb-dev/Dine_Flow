"use client";

import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";

const BestSellers = ({
  products = [],
  onViewAll,
}) => {
  

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    }
  };

  return (
    <section className="bg-[#fffaf5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0e7]">
                <Flame className="h-3.5 w-3.5 text-[#f97316]" />
              </span>

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c96a3d]">
                Customer Favorites
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl lg:text-4xl">
              Our best sellers
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#806f65] sm:text-base">
              The dishes our customers keep coming back for.
            </p>
          </div>

          {/* Desktop View All */}
          <button
            type="button"
            onClick={handleViewAll}
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-bold text-[#c92a2a] transition-colors hover:text-[#a91f1f] sm:flex"
          >
            View All

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => {
             
              return (
                <article
                  key={product._id}
                  className="group overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/60"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#fff0e7]">
                    {product.image?.url ? (
                      <img
                        src={product.image.url}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <ShoppingBag className="h-10 w-10 text-[#e2b8a1]" />
                      </div>
                    )}

                    {/* Bestseller Badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold text-[#c92a2a] shadow-md backdrop-blur-sm">
                      <Flame className="h-3 w-3 fill-[#f97316] text-[#f97316]" />
                      Bestseller
                    </div>

                    {/* Availability */}
                    {!product.available && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#2b211d]/45 backdrop-blur-[2px]">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#5f5049] shadow-lg">
                          Currently unavailable
                        </span>
                      </div>
                    )}

                   
                  </div>

                  {/* Product Information */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#c97950]">
                          {product.category || "Our Menu"}
                        </p>

                        <h3 className="truncate text-base font-extrabold text-[#332720] sm:text-lg">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#fff8e8] px-2 py-1">
                        <Star className="h-3 w-3 fill-[#f5b82e] text-[#f5b82e]" />
                        <span className="text-[10px] font-bold text-[#765d32]">
                          4.9
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-[#89776d]">
                      {product.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-orange-50 pt-4">
                      <div>
                        <span className="text-[10px] font-medium text-[#9a887e]">
                          Starting from
                        </span>

                        <p className="mt-0.5 text-lg font-black text-[#c92a2a]">
                          Rs {product.sizes[0].price}
                        </p>
                      </div>

                      <Link
                        href={`/menu/${product._id}`}
                        className="flex h-9 items-center gap-1.5 rounded-xl bg-[#fff0e7] px-3 text-xs font-bold text-[#c92a2a] transition-colors hover:bg-[#ffe5d8]"
                      >
                        View
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-8 rounded-[1.75rem] border border-orange-100 bg-white px-5 py-14 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0e7]">
              <ShoppingBag className="h-6 w-6 text-[#d65b2f]" />
            </div>

            <h3 className="mt-4 text-lg font-extrabold text-[#332720]">
              Our favorites are coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#89776d]">
              We're preparing something delicious for you.
            </p>
          </div>
        )}

        {/* Mobile View All */}
        <button
          type="button"
          onClick={handleViewAll}
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-100 bg-white px-4 py-3.5 text-sm font-bold text-[#c92a2a] transition-all duration-200 hover:border-orange-200 hover:bg-[#fff4eb] sm:hidden"
        >
          View All Best Sellers

          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default BestSellers;