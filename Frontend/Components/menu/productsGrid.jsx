
"use client";

import { SearchX } from "lucide-react";

import ProductCard from "./productCard";

const ProductGrid = ({ products = [] }) => {
  if (products.length === 0) {
    return (
      <div className="rounded-[2rem] border border-orange-100 bg-white px-5 py-14 text-center shadow-sm sm:px-8 sm:py-20">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff0e7]">
          <SearchX className="h-7 w-7 text-[#c92a2a]" />
        </div>

        <h2 className="mt-5 text-xl font-black tracking-tight text-[#2b211d] sm:text-2xl">
          Nothing delicious here yet
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#806d64]">
          We couldn't find any available food in this category. Try another
          category and discover something tasty.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

