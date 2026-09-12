"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  Plus,
  ShoppingBag,
} from "lucide-react";

const MoreMenu = ({
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
        {/* Heading */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1 w-7 rounded-full bg-[#f97316]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c96a3d]">
                More to Explore
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl lg:text-4xl">
              More from our menu
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#806f65] sm:text-base">
              Still hungry? Discover more delicious choices made for every
              kind of craving.
            </p>
          </div>

          {/* Desktop View All */}
          <button
            type="button"
            onClick={handleViewAll}
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-bold text-[#c92a2a] transition-colors hover:text-[#a91f1f] sm:flex"
          >
            Explore Menu

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Product List */}
        {products.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => {
            

              return (
                <article
                  key={product._id}
                  className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[#fff0e7]">
                    {product.image?.url ? (
                      <img
                        src={product.image.url}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ShoppingBag className="h-9 w-9 text-[#dfb39c]" />
                      </div>
                    )}

                    {/* Category */}
                    <div className="absolute left-2.5 top-2.5 max-w-[70%] rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold text-[#7b6255] shadow-sm backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      {product.category || "Menu"}
                    </div>

                    {/* Unavailable */}
                    {product.available === false && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#2b211d]/45 backdrop-blur-[2px]">
                        <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#5f5049] shadow-lg">
                          Unavailable
                        </span>
                      </div>
                    )}

                    {/* Add Button */}
                   
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    <h3 className="truncate text-sm font-extrabold text-[#332720] sm:text-base">
                      {product.name}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 min-h-8 text-[10px] leading-4 text-[#8b786d] sm:min-h-10 sm:text-xs sm:leading-5">
                      {product.shortDescription}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2 border-t border-orange-50 pt-3">
                      <div>
                        <p className="text-[9px] font-medium text-[#a08d82] sm:text-[10px]">
                          From
                        </p>

                        <p className="text-sm font-black text-[#c92a2a] sm:text-base">
                       Rs {product.sizes[0].price}
                        </p>
                      </div>

                      <Link
                        href={`/menu/${product._id}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7] text-[#c92a2a] transition-colors hover:bg-[#ffe5d8] sm:h-9 sm:w-9"
                      >
                        <ChevronRight className="h-4 w-4" />
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
              More delicious choices coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#89776d]">
              We're adding more tasty options to the menu.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0e7]">
              <Flame className="h-5 w-5 fill-[#f97316] text-[#f97316]" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#3d302a]">
                There's more waiting for you
              </p>

              <p className="mt-0.5 text-xs text-[#917e73]">
                Explore everything on our menu.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleViewAll}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#c92a2a] px-5 py-3 text-xs font-bold text-white shadow-md shadow-red-200/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b82323] hover:shadow-lg sm:w-auto"
          >
            View Full Menu

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreMenu;