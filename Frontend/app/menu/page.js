
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import MenuHeader from "@/Components/menu/Header";
import MenuCategories from "@/Components/menu/categories";
import ProductGrid from "@/Components/menu/productsGrid";

const MenuPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryFromUrl = searchParams.get("category");

  const selectedCategory = categoryFromUrl || "All";

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/home/products");

      setProducts(response.data.products || []);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      router.push(pathname);
      return;
    }

    router.push(
      `${pathname}?category=${encodeURIComponent(category)}`
    );
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2b211d]">
      <main>
        <MenuHeader />

        <MenuCategories
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#c4512c]">
                  Your selection
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-[#2b211d] sm:text-3xl">
                  {selectedCategory === "All"
                    ? "All Menu Items"
                    : selectedCategory}
                </h2>
              </div>

              {!loading && (
                <p className="shrink-0 text-xs font-semibold text-[#8b766d] sm:text-sm">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "item" : "items"}
                </p>
              )}
            </div>

            {/* Loading state */}
            {loading ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white"
                  >
                    <div className="aspect-[1.05/1] animate-pulse bg-[#fff0e7]" />

                    <div className="space-y-3 p-4 sm:p-5">
                      <div className="h-4 w-3/4 animate-pulse rounded-full bg-orange-100" />

                      <div className="h-3 w-full animate-pulse rounded-full bg-orange-50" />

                      <div className="h-3 w-2/3 animate-pulse rounded-full bg-orange-50" />

                      <div className="mt-5 h-10 w-full animate-pulse rounded-xl bg-orange-100" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;

