"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Flame,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const FeaturedDeals = ({
  deals = [],
  onViewAll,
}) => {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    }
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#fff0e7] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ffe7d7] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0e7]">
                <Sparkles className="h-3.5 w-3.5 text-[#f97316]" />
              </span>

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c96a3d]">
                Special Offers
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl lg:text-4xl">
              Deals made for you
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#806f65] sm:text-base">
              More food, more value. Grab our limited-time deals before
              they're gone.
            </p>
          </div>

          {/* Desktop View All */}
          <button
            type="button"
            onClick={handleViewAll}
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-bold text-[#c92a2a] transition-colors hover:text-[#a91f1f] sm:flex"
          >
            View All Deals

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Deals */}
        {deals.length > 0 ? (
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {deals.slice(0, 4).map((deal, index) => (
              <article
                key={deal._id}
                className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fffaf5] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/60"
              >
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  {/* Deal Image */}
                  <div className="relative aspect-[1.25/1] overflow-hidden bg-[#ffe8dc] sm:aspect-auto sm:min-h-[280px]">
                    {deal.image?.url ? (
                      <img
                        src={deal.image.url}
                        alt={deal.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full min-h-[240px] items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-[#dfb39c]" />
                      </div>
                    )}

                    {/* Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b211d]/30 via-transparent to-transparent" />

                    {/* Deal Badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-[#c92a2a] px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg shadow-red-900/10">
                      <Flame className="h-3 w-3 fill-[#ffd166] text-[#ffd166]" />
                      Special Deal
                    </div>

                    {/* Deal Number */}
                    <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-xs font-black text-[#c92a2a] shadow-md backdrop-blur-sm">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Deal Content */}
                  <div className="flex flex-col p-5 sm:p-6">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#d16b43]">
                            DineFlow Deal
                          </p>

                          <h3 className="mt-1.5 text-xl font-black tracking-tight text-[#332720]">
                            {deal.name}
                          </h3>
                        </div>

                        {deal.available !== false && (
                          <span className="flex h-8 shrink-0 items-center gap-1 rounded-full bg-[#edf9ef] px-2.5 text-[10px] font-bold text-[#367343]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#4a9a58]" />
                            Available
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#806f65]">
                        {deal.shortDescription}
                      </p>
                    </div>

                    {/* Deal Items */}
                    {deal.items?.length > 0 && (
                      <div className="mt-5 rounded-2xl border border-orange-100 bg-white/80 p-3.5">
                        <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-[#9a8174]">
                          What's included
                        </p>

                        <div className="space-y-2">
                          {deal.items.slice(0, 3).map((item, itemIndex) => (
                            <div
                              key={`${deal._id}-${itemIndex}`}
                              className="flex items-center gap-2.5"
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff0e7]">
                                <Check className="h-3 w-3 text-[#c92a2a]" />
                              </span>

                              <span className="min-w-0 flex-1 truncate text-xs font-semibold text-[#55463e]">
                                {item.productName}
                              </span>

                              <span className="shrink-0 rounded-full bg-[#fff7f0] px-2 py-0.5 text-[10px] font-bold text-[#9b6a52]">
                                ×{item.quantity}
                              </span>
                            </div>
                          ))}

                          {deal.items.length > 3 && (
                            <p className="pt-1 text-[10px] font-semibold text-[#a38d81]">
                              + {deal.items.length - 3} more item
                              {deal.items.length - 3 > 1 ? "s" : ""}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Bottom */}
                    <div className="mt-auto pt-5">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-medium text-[#9a887e]">
                            Deal price
                          </p>

                          <p className="mt-0.5 text-2xl font-black text-[#c92a2a]">
                            Rs.{" "}
                            {Number(deal.dealPrice).toLocaleString("en-PK")}
                          </p>
                        </div>

                        <Link
                          href={`/deals/${deal._id}`}
                          className="group/button flex h-10 items-center gap-1.5 rounded-xl bg-[#c92a2a] px-4 text-xs font-bold text-white shadow-md shadow-red-200/40 transition-all duration-200 hover:bg-[#b82323] hover:shadow-lg"
                        >
                          View Deal

                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/button:translate-x-0.5" />
                        </Link>
                      </div>

                      {/* Validity */}
                      {deal.startDate && deal.endDate && (
                        <div className="mt-4 flex items-center gap-1.5 border-t border-orange-100 pt-3 text-[10px] font-medium text-[#99867b]">
                          <CalendarDays className="h-3.5 w-3.5 text-[#d17a52]" />

                          <span>
                            Valid {formatDate(deal.startDate)} –{" "}
                            {formatDate(deal.endDate)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-8 rounded-[2rem] border border-orange-100 bg-[#fffaf5] px-5 py-14 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0e7]">
              <Sparkles className="h-6 w-6 text-[#f97316]" />
            </div>

            <h3 className="mt-4 text-lg font-extrabold text-[#332720]">
              New deals are cooking
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#89776d]">
              Check back soon for delicious offers and special combos.
            </p>
          </div>
        )}

        {/* Mobile View All */}
        <button
          type="button"
          onClick={handleViewAll}
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-100 bg-[#fffaf5] px-4 py-3.5 text-sm font-bold text-[#c92a2a] transition-all duration-200 hover:border-orange-200 hover:bg-[#fff4eb] sm:hidden"
        >
          View All Deals

          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedDeals;