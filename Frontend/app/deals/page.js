"use client";
import HomeNavbar from "@/Components/Home/Navbar";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import { useAuth } from "@/src/context/authProvider";

import DealsHeader from "@/Components/Deals/header";
import DealsSearch from "@/Components/Deals/search";
import DealsFeatured from "@/Components/Deals/featured";
import DealsGrid from "@/Components/Deals/dealGrid";

const DealsPage = () => {

  const {user} = useAuth()
  const router = useRouter();

  const [deals, setDeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDeals = async () => {
    try {
      setLoading(true);

      const response = await api.get("/home/deals");

      setDeals(response.data.deals || []);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const featuredDeal = deals[0] || null;

  const filteredDeals = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return deals;
    }

    return deals.filter((deal) => {
      const name = deal.name?.toLowerCase() || "";
      const description =
        deal.shortDescription?.toLowerCase() || "";

      const items =
        deal.items
          ?.map((item) => item.productName?.toLowerCase() || "")
          .join(" ") || "";

      return (
        name.includes(normalizedSearch) ||
        description.includes(normalizedSearch) ||
        items.includes(normalizedSearch)
      );
    });
  }, [deals, searchTerm]);

  const handleViewDeal = (deal) => {
    router.push(`/deals/${deal._id}`);
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2b211d]">
      <main>
        <HomeNavbar user={user}/>
        <DealsHeader />

        <DealsSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Featured Deal */}
        {!loading && !searchTerm.trim() && featuredDeal && (
          <DealsFeatured
            deal={featuredDeal}
            onViewDeal={handleViewDeal}
          />
        )}

        {/* Deals Grid */}
        <section className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#c4512c]">
                  {searchTerm.trim()
                    ? "Search results"
                    : "All offers"}
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl">
                  {searchTerm.trim()
                    ? `Deals for "${searchTerm}"`
                    : "Find Your Perfect Deal"}
                </h2>
              </div>

              {!loading && (
                <p className="shrink-0 text-xs font-semibold text-[#8b766d] sm:text-sm">
                  {filteredDeals.length}{" "}
                  {filteredDeals.length === 1 ? "deal" : "deals"}
                </p>
              )}
            </div>

            {loading ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white"
                  >
                    <div className="aspect-[1.15/1] animate-pulse bg-[#fff0e7]" />

                    <div className="space-y-3 p-4 sm:p-5">
                      <div className="h-5 w-3/4 animate-pulse rounded-full bg-orange-100" />

                      <div className="h-3 w-full animate-pulse rounded-full bg-orange-50" />

                      <div className="h-3 w-2/3 animate-pulse rounded-full bg-orange-50" />

                      <div className="flex gap-2">
                        <div className="h-6 w-20 animate-pulse rounded-full bg-orange-50" />
                        <div className="h-6 w-24 animate-pulse rounded-full bg-orange-50" />
                      </div>

                      <div className="mt-4 h-11 w-full animate-pulse rounded-2xl bg-orange-100" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <DealsGrid
                deals={filteredDeals}
                onViewDeal={handleViewDeal}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DealsPage;